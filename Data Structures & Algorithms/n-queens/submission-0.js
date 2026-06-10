class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
  solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    let result = [];

    function isValid(row, col) {
      for (let r = row - 1; r >= 0; r--) {
        if (board[r][col] === "Q") {
          return false;
        }
      }

      for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
        if (board[r][c] === "Q") {
          return false;
        }
      }

      for (let r = row - 1, c = col + 1; r >= 0 && c < n; r--, c++) {
        if (board[r][c] === "Q") {
          return false;
        }
      }

      return true;
    }

    function dfs(row) {
      if (row === n) {
        const copyOfBoard = board.map((row) => row.join(""));
        result.push(copyOfBoard);
        return;
      }
      for (let col = 0; col < n; col++) {
        if (!isValid(row, col)) {
          continue;
        }

        // place queen
        board[row][col] = "Q";
        dfs(row + 1);

        board[row][col] = ".";
        // remove queen
      }
    }
    dfs(0);
    return result;
  }
}
