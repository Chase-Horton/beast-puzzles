import os
import re
import random
import asyncio
import requests
from playwright.async_api import async_playwright

NUM_PUZZLES = 10

LOCALES = ["en-US", "en-GB", "fr-FR", "de-DE", "es-ES", "it-IT", "pt-BR", "ja-JP", "ko-KR", "zh-CN"]
TIMEZONES = [
    "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
    "Europe/London", "Europe/Paris", "Europe/Berlin", "Asia/Tokyo", "Asia/Shanghai",
    "Australia/Sydney",
]
VIEWPORTS = [
    (1920, 1080), (1366, 768), (1536, 864), (1440, 900), (1280, 720),
    (1600, 900), (1680, 1050), (2560, 1440), (1360, 768), (1280, 1024),
]

download_dir = os.path.abspath("one_mil")

captcha_answers = {}

async def download_puzzle(pw, idx, engine, barrier_event):
    """Launch a unique browser context, wait for go signal, then grab puzzle."""
    try:
        # Pick a genuinely different browser engine
        if engine == "chromium":
            browser_type = pw.chromium
        elif engine == "firefox":
            browser_type = pw.firefox
        else:
            browser_type = pw.webkit

        vp = VIEWPORTS[idx % len(VIEWPORTS)]
        locale = LOCALES[idx % len(LOCALES)]
        tz = TIMEZONES[idx % len(TIMEZONES)]

        browser = await browser_type.launch(headless=False)
        context = await browser.new_context(
            viewport={"width": vp[0], "height": vp[1]},
            locale=locale,
            timezone_id=tz,
            color_scheme=random.choice(["light", "dark"]),
            device_scale_factor=random.choice([1, 1.25, 1.5, 2]),
        )
        page = await context.new_page()
        print(f"[{idx}] {engine} ready (locale={locale}, tz={tz}, {vp[0]}x{vp[1]})")

        # Wait for all browsers to be ready
        barrier_event.set()  # signal this one is ready
        # The main loop waits for all events then triggers go
        await asyncio.sleep(0)  # yield

        # Navigate
        await page.goto('https://www.onemil.xyz/', wait_until="networkidle")

        # Solve captcha
        captcha = await page.wait_for_selector("div.text-5xl", timeout=15000)
        text = await captcha.text_content()
        match = re.search(r'(\d+)\s*\+\s*(\d+)', text)
        if not match:
            print(f"[{idx}] Could not parse captcha: {text}")
            await browser.close()
            return

        x, y = int(match.group(1)), int(match.group(2))
        answer = x + y
        print(f"[{idx}] Solving captcha: {x} + {y} = {answer}")
        await page.fill("input[type='number']", str(answer))
        await page.click("button[type='submit']")

        # Accept challenge
        accept = await page.wait_for_selector(
            "button:has-text('Accept'), button:has-text('accept'), button:has-text('ACCEPT')",
            timeout=15000,
        )
        await accept.click()

        # Get PDF link
        dl_link = await page.wait_for_selector("a[download]", timeout=15000)
        pdf_url = await dl_link.get_attribute("href")

        # Extract case number
        content = await page.content()
        case_match = re.search(r'CASE\s*#(\d+)', content)
        case_id = case_match.group(1) if case_match else f"unknown_{idx}"
        captcha_answers[case_id] = (x, y, answer)
        print(f"[{idx}] {engine} -> Case #{case_id}")

        # Download PDF
        filepath = os.path.join(download_dir, f"{case_id}.pdf")
        if os.path.exists(filepath):
            print(f"[{idx}] Already have {case_id}.pdf")
        else:
            resp = requests.get(pdf_url)
            if resp.status_code == 200:
                with open(filepath, "wb") as f:
                    f.write(resp.content)
                print(f"[{idx}] Downloaded {case_id}.pdf")
            else:
                print(f"[{idx}] Download failed: {resp.status_code}")

        await browser.close()
        return case_id

    except Exception as e:
        print(f"[{idx}] {engine} error: {e}")
        return None


async def main():
    # Distribute across 3 engines: chromium, firefox, webkit
    engines = ["chromium", "firefox", "webkit"]
    assignments = []
    for i in range(NUM_PUZZLES):
        assignments.append(engines[i % 3])

    print(f"Launching {NUM_PUZZLES} browsers across {len(engines)} engines...")
    for i, eng in enumerate(assignments):
        print(f"  [{i}] {eng}")

    async with async_playwright() as pw:
        barriers = [asyncio.Event() for _ in range(NUM_PUZZLES)]
        tasks = [
            download_puzzle(pw, i, assignments[i], barriers[i])
            for i in range(NUM_PUZZLES)
        ]
        results = await asyncio.gather(*tasks)

    pdfs = [f for f in os.listdir(download_dir) if f.endswith(".pdf")]
    unique = set(r for r in results if r)
    print(f"\n=== Done! {len(unique)} unique puzzles, {len(pdfs)} total PDFs in {download_dir} ===")
    for p in sorted(pdfs):
        x, y, z = captcha_answers.get(p.removesuffix(".pdf"), (None, None, None))
        expr = f"  {x} + {y} = {z}" if x is not None else ""
        print(f"  {p}{expr}")

    for case_id, (x, y, z) in captcha_answers.items():
        print(f"Captcha [{case_id}]: {x} + {y} = {z}")
        print(f'case_sum: {sum(int(d) for d in str(case_id))}')


if __name__ == "__main__":
    asyncio.run(main())
# 