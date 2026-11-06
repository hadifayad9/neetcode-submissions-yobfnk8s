class Solution {
  /**
   * @param {number[][]} heights
   * @return {number[][]}
   */
  pacificAtlantic(grid) {
    if (!grid || grid.length === 0) {
      return [];
    }
    let result = [];
    let reachedPacific = false;
    let reachedAtlantic = false;
    let visited = [];
    function dfs(r, c) {
      if (
        r < 0 ||
        r >= grid.length ||
        c < 0 ||
        c >= grid[0].length ||
        visited[r][c] === true
      ) {
        return false;
      }
      visited[r][c] = true;
      if (r === 0 || c === 0) {
        reachedPacific = true;
      }
      if (r === grid.length - 1 || c === grid[0].length - 1) {
        reachedAtlantic = true;
      }
      if (reachedAtlantic && reachedPacific) return;
      //up
      if (r > 0 && grid[r - 1][c] <= grid[r][c]) {
        dfs(r - 1, c);
      }
      //down
      if (r < grid.length - 1 && grid[r + 1][c] <= grid[r][c]) {
        dfs(r + 1, c);
      }
      //left
      if (c > 0 && grid[r][c - 1] <= grid[r][c]) {
        dfs(r, c - 1);
      }
      //right
      if (c < grid[0].length - 1 && grid[r][c + 1] <= grid[r][c]) {
        dfs(r, c + 1);
      }
    }
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        reachedAtlantic = false;
        reachedPacific = false;
        visited = Array.from({ length: grid.length }, () =>
          Array(grid[0].length).fill(false)
        );

        dfs(row, col);
        if (reachedAtlantic && reachedPacific) {
          result.push([row, col]);
        }
      }
    }
    return result;
  }
}