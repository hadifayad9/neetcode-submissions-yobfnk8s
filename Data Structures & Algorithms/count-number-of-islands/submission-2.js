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

    let totalRows = grid.length;
    let totalCol = grid[0].length;

    function dfs(r, c) {
      if (
        r < 0 ||
        r >= totalRows ||
        c < 0 ||
        c >= totalCol ||
        grid[r][c] === '0'
      ) {
        return;
      }
      grid[r][c] = '0';

      dfs(r - 1, c); // up
      dfs(r + 1, c); // down
      dfs(r, c - 1); // left
      dfs(r, c + 1); // right
    }

    for (let r = 0; r < totalRows; r++) {
      for (let c = 0; c < totalCol; c++) {
        if (grid[r][c] === '1') {
          numberOfIslands++;

          dfs(r, c);
        }
      }
    }
    return numberOfIslands;
  }
}