class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  exist(board, word) {
    let found = Array.from({ length: board.length }, () =>
      Array(board[0].length).fill(false)
    );
    function dfs(row, col, n) {
      if (n === word.length) {
        return true;
      }
      if (
        row < 0 ||
        row > board.length - 1 ||
        col < 0 ||
        col > board[0].length - 1
      ) {
        return false;
      }
      if (board[row][col] !== word[n] || found[row][col] === true) {
        return false;
      }

      found[row][col] = true;

      let explore =
        dfs(row - 1, col, n + 1) || // up
        dfs(row + 1, col, n + 1) || // down
        dfs(row, col - 1, n + 1) || // left
        dfs(row, col + 1, n + 1); // right
      found[row][col] = false;

      return explore;
    }
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
      return false;
  }
}