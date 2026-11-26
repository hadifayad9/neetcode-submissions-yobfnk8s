class Solution {
  pacificAtlantic(heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    const atlantic = Array.from({ length: rows }, () =>
      Array(cols).fill(false)
    );

    function dfs(r, c, visited) {
      if (visited[r][c]) return;
      visited[r][c] = true;

      //up (Check if the value is larger than current val)
      if (r > 0 && heights[r - 1][c] >= heights[r][c]) {
        dfs(r - 1, c, visited);
      }
      //down
      if (r < rows - 1 && heights[r + 1][c] >= heights[r][c]) {
        dfs(r + 1, c, visited);
      }
      //left
      if (c > 0 && heights[r][c - 1] >= heights[r][c]) {
        dfs(r, c - 1, visited);
      }
      // right
      if (c < cols - 1 && heights[r][c + 1] >= heights[r][c]) {
        dfs(r, c + 1, visited);
      }
    }

    // Search inward from each ocean's edges.
    //left (pacific) and right (atlantic)
    for (let row = 0; row < rows; row++) {
      dfs(row, 0, pacific);
      dfs(row, cols - 1, atlantic);
    }

    //top (pacific) bottom (atlantic)
    for (let col = 0; col < cols; col++) {
      dfs(0, col, pacific);
      dfs(rows - 1, col, atlantic);
    }

    const result = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (pacific[i][j] === true && atlantic[i][j] === true) {
          result.push([i, j]);
        }
      }
    }

    return result;
  }
}