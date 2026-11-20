class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
  maxAreaOfIsland(grid) {
    if (!grid || grid.length === 0) {
      return 0;
    }
    let maxArea = 0;
    let area = 0;

    let totalRows = grid.length;
    let totalCol = grid[0].length;

    function dfs(r, c) {
      if (
        r < 0 ||
        r >= totalRows ||
        c < 0 ||
        c >= totalCol ||
        grid[r][c] === 0
      ) {
        return;
      }
      grid[r][c] = 0;
      area++;

      dfs(r - 1, c);
      dfs(r + 1, c);
      dfs(r, c - 1);
      dfs(r, c + 1);
    }

    for (let r = 0; r < totalRows; r++) {
      for (let c = 0; c < totalCol; c++) {
        if (grid[r][c] === 1) {
          area = 0;
          dfs(r, c);
          maxArea = Math.max(maxArea, area);
        }
      }
    }
    return maxArea;
  }
}
