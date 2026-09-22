class Solution {
  solveNQueens(n) {
    const board = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => '.')
    );
    let result = [];
    function isValid(row, col) {
      if (row === 0) {
        return true;
      }
      //upward
      for (let r = row; r >= 0; r--) {
        if (board[r][col] === 'Q') {
          return false;
        }
      }
      //upper-left
      for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
        if (board[r][c] === 'Q') {
          return false;
        }
      }
      //upper-right
      for (let r = row - 1, c = col + 1; r >= 0 && c < n; r--, c++) {
        if (board[r][c] === 'Q') {
          return false;
        }
      }
      return true;
    }

    function dfs(row) {
      if (row === n) {
        result.push(board.map((row) => row.join('')));
        return;
      }
      for (let col = 0; col < n; col++) {
        if (!isValid(row, col)) continue;

        board[row][col] = 'Q';
        dfs(row + 1);
        board[row][col] = '.';
      }
    }
    dfs(0);
    return result;
  }
}