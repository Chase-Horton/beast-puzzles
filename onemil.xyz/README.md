# onemil.xyz Sudoku

Archive of information on [onemil.xyz](https://www.onemil.xyz/).

## Contents

### [`website/`](website/)
A downloaded copy of the onemil.xyz site (`index.html` + `_next/` assets).

### [`pdfs/`](pdfs/)
22 sudoku puzzle PDFs retrieved from the site, each named by case number (e.g. `118049.pdf`). Includes sequential runs of case numbers.

### [`puzzles.toml`](puzzles.toml)
Extracted grids and their solutions in flat 81-character format.

### [`captchas.txt`](captchas.txt)
Recorded captcha challenges encountered when downloading each puzzle, keyed by case number. (didn't start record for all of them)

## Ideas & Ways Forward

### Attempted
- [x] Search pdf for metadata and hidden text
    - Running strings searches on the pdfs reveals no interesting strings present in binary at all
- [x] Search website for metadata and hidden text
    - the only notable find was the api call to `/api/puzzle` which returns the link to the pdf

    ```http
    POST /api/puzzle HTTP/1.1
    Host: www.onemil.xyz
    Content-Type: application/json

    {"fingerprint":"00dl44rx"}
    ```

    Response:

    ```json
    {
      "pdfUrl": "https://qvrvlqffqftxlxflcmzc.supabase.co/storage/v1/object/sign/hopscotch-files/102835.pdf?token=...",
      "pdfIndex": 102834,
      "sessionId": "006oufk6",
      "isNew": false
    }
    ```
- [x] Attempting other API calls or methods.
    - Was not able to find any other routes that worked, such as `/api/submit` returned 404
    - Similarly, `robots.txt` and `sitemap.xml` do not exist.

### To Try

- [ ] Analyze the Sudoku Solutions
    - While we have tried applying basic letter substitutions to the solved grids,
    we have not yet tried to analyze the relationship between the solutions themselves
- [ ] Analyze Sequences of Puzzles
    - As the puzzles are ordered on the PDF by case number, this may imply it is
    worth analyzing the relationship between the solutions in sequence.

- [ ] Analyze Relationship between Case Number and Solution
