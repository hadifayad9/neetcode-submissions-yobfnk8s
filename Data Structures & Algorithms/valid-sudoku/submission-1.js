class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
  isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        let value = board[row][col];
        if (value === ".") {
          continue;
        }
        let boxesSquare = Math.floor(row / 3) * 3 + Math.floor(col / 3);

        if (
          rows[row].has(value) ||
          cols[col].has(value) ||
          boxes[boxesSquare].has(value)
        ) {
          return false;
        }
        rows[row].add(value);
        cols[col].add(value);
        boxes[boxesSquare].add(value);
      }
    }
    return true;
  }
}