class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
  numIslands(grid) {
    if (!grid || grid.length === 0) {
      return 0;
    }
    let numberOfIslands = 0;
    function dfs(r, c) {
      if (
        r < 0 ||
        r >= grid.length ||
        c < 0 ||
        c >= grid[0].length ||
        grid[r][c] === '0'
      ) {
        return;
      }
      grid[r][c] = '0';
      //up
      dfs(r - 1, c);
      //down
      dfs(r + 1, c);
      //left
      dfs(r, c - 1);
      //right
      dfs(r, c + 1);
    }
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === '1') {
          numberOfIslands++;
          dfs(row, col);
        }
      }
    }
    return numberOfIslands;
  }
}
