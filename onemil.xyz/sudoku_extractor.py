import os
import copy
import pdfplumber


def extract_sudoku(pdf_path):
    """Extract a 9x9 sudoku grid from a PDF, return (case_id, board)."""
    with pdfplumber.open(pdf_path) as pdf:
        page = pdf.pages[0]
        chars = [c for c in page.chars if c["text"].strip() and c["text"].isdigit()]
        lines = page.lines + page.rects

    if not chars:
        return None, None

    chars.sort(key=lambda c: c["top"])

    max_y = max(c["top"] for c in chars)
    case_chars = [c for c in chars if abs(c["top"] - max_y) < 5]
    case_chars.sort(key=lambda c: c["x0"])
    case_id = "".join(c["text"] for c in case_chars)

    grid_chars = [c for c in chars if abs(c["top"] - max_y) >= 5]
    if not grid_chars:
        return case_id, None

    xs = sorted(set(round(c["x0"], 0) for c in grid_chars))
    ys = sorted(set(round(c["top"], 0) for c in grid_chars))

    # Collect all edge positions from lines AND rect borders
    h_set = set()
    v_set = set()
    for l in page.lines:
        if abs(l["top"] - l["bottom"]) < 2:  # horizontal line
            h_set.add(round(l["top"], 0))
        if abs(l["x0"] - l["x1"]) < 2:  # vertical line
            v_set.add(round(l["x0"], 0))
    for r in page.rects:
        # Rect edges act as grid borders (outer border)
        h_set.add(round(r["top"], 0))
        h_set.add(round(r["bottom"], 0))
        v_set.add(round(r["x0"], 0))
        v_set.add(round(r["x1"], 0))
    v_lines = sorted(v_set)
    h_lines = sorted(h_set)

    if len(v_lines) >= 10 and len(h_lines) >= 10:
        col_centers = [(v_lines[i] + v_lines[i + 1]) / 2 for i in range(9)]
        row_centers = [(h_lines[i] + h_lines[i + 1]) / 2 for i in range(9)]
    else:
        min_x, max_x = min(xs), max(xs)
        min_y, max_y_grid = min(ys), max(ys)
        step_x = (max_x - min_x) / 8 if len(xs) > 1 else 40
        step_y = (max_y_grid - min_y) / 8 if len(ys) > 1 else 40
        col_centers = [min_x + i * step_x for i in range(9)]
        row_centers = [min_y + i * step_y for i in range(9)]

    board = [["." for _ in range(9)] for _ in range(9)]
    for c in grid_chars:
        cx, cy = c["x0"], c["top"]
        col = min(range(9), key=lambda i: abs(col_centers[i] - cx))
        row = min(range(9), key=lambda i: abs(row_centers[i] - cy))
        board[row][col] = c["text"]

    return case_id, board


def solve(board):
    """Solve sudoku via backtracking. Returns solved board or None."""
    b = copy.deepcopy(board)

    def possible(r, c, n):
        s = str(n)
        if s in b[r]:
            return False
        if s in [b[i][c] for i in range(9)]:
            return False
        br, bc = (r // 3) * 3, (c // 3) * 3
        for i in range(br, br + 3):
            for j in range(bc, bc + 3):
                if b[i][j] == s:
                    return False
        return True

    def backtrack():
        for r in range(9):
            for c in range(9):
                if b[r][c] == ".":
                    for n in range(1, 10):
                        if possible(r, c, n):
                            b[r][c] = str(n)
                            if backtrack():
                                return True
                            b[r][c] = "."
                    return False
        return True

    return b if backtrack() else None


def board_to_flat(board):
    """Convert 9x9 board to 81-char string (dots for empty)."""
    return "".join(board[r][c] for r in range(9) for c in range(9))


def format_board(board):
    lines = []
    for r in range(9):
        row_parts = []
        for box in range(3):
            cells = board[r][box * 3 : box * 3 + 3]
            row_parts.append(" ".join(cells))
        lines.append(" | ".join(row_parts))
        if r in (2, 5):
            lines.append("------+-------+------")
    return "\n".join(lines)


def format_side_by_side(unsolved, solved):
    """Format unsolved and solved boards side by side."""
    left = format_board(unsolved).split("\n")
    right = format_board(solved).split("\n")
    header = f"{'  UNSOLVED':<27}    {'  SOLVED'}"
    lines = [header]
    for l, r in zip(left, right):
        lines.append(f"{l}    {r}")
    return "\n".join(lines)


def main():
    pdf_dir = os.path.abspath("onemil.xyz sudoku/pdfs")
    pdfs = sorted(f for f in os.listdir(pdf_dir) if f.endswith(".pdf") and f[0].isdigit())

    if not pdfs:
        print("No PDFs found in onemil.xyz sudoku/pdfs")
        return

    puzzles = []

    for pdf_file in pdfs:
        pdf_path = os.path.join(pdf_dir, pdf_file)
        case_id, board = extract_sudoku(pdf_path)
        if not board:
            print(f"{pdf_file}: could not extract grid\n")
            continue

        solved = solve(board)
        if not solved:
            print(f"{case_id}: FAILED TO SOLVE — extracted board:")
            print(format_board(board))
            print(f"flat: {board_to_flat(board)}\n")
            continue

        puzzles.append((case_id, board, solved))

        print(f"{case_id}:")
        print(format_side_by_side(board, solved))
        print()

    # Save TOML — each puzzle is a section keyed by ID
    toml_path = os.path.join(pdf_dir, "puzzles.toml")
    with open(toml_path, "w") as f:
        for case_id, board, solved in puzzles:
            f.write(f"[{case_id}]\n")
            f.write(f'unsolved = "{board_to_flat(board)}"\n')
            f.write(f'solved   = "{board_to_flat(solved)}"\n\n')

    print(f"Saved {len(puzzles)} puzzles to {toml_path}")


if __name__ == "__main__":
    main()
