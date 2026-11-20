class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
  numIslands(grid) {
    if (grid.length === 0 || !grid) {
      return grid;
    }
    let row = grid.length;
    let col = grid[0].length;
    let numOfIslands = 0;
    function dfs(r, c) {
      if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === '0') {
        return;
      }
      grid[r][c] = '0';

      dfs(r - 1, c); //up
      dfs(r + 1, c); //down;
      dfs(r, c - 1); //left;
      dfs(r, c + 1); //right
    }
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
        if (grid[r][c] === '1') {
          numOfIslands++;
          dfs(r, c);
        }
      }
    }
    return numOfIslands;
  }
}
