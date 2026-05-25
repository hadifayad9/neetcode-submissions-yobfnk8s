class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
  exist(board, word) {
    let vistedPaths = Array.from({ length: board.length }, () =>
      Array(board[0].length).fill(false),
    );
    function dfs(i, row, col) {
      if (i === word.length) {
        return true;
      }
      if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return false;
      }
      if (board[row][col] !== word[i]) {
        return false;
      }
      if (vistedPaths[row][col] === true) {
        return false;
      }
      vistedPaths[row][col] = true;
      const found =
        dfs(i + 1, row - 1, col) || // up
        dfs(i + 1, row + 1, col) || // down
        dfs(i + 1, row, col - 1) || // left
        dfs(i + 1, row, col + 1); // right
      vistedPaths[row][col] = false;

      return found;
    }
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (dfs(0, i, j)) return true;
      }
    }
    return false
  }
}
