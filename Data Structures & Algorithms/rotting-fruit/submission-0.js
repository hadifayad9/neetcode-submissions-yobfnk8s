class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
  orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let fresh = 0;
    let minutes = 0;

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const element = grid[row][col];
        if (element === 2) {
          queue.push([row, col]);
        }
        if (element === 1) {
          fresh++;
        }
      }
    }

    while (queue.length > 0 && fresh > 0) {
      const levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        const [row, col] = queue.shift();

        if (row > 0 && grid[row - 1][col] === 1) {
          // Mark rotten, add to queue, decrease fresh
          grid[row - 1][col] = 2;
          queue.push([row - 1, col]);
          fresh--;
        }

        // Down
        if (row < rows - 1 && grid[row + 1][col] === 1) {
          // Mark rotten, add to queue, decrease fresh
          grid[row + 1][col] = 2;
          queue.push([row + 1, col]);
          fresh--;
        }

        // Left
        if (col > 0 && grid[row][col - 1] === 1) {
          // Mark rotten, add to queue, decrease fresh
          grid[row][col - 1] = 2;
          queue.push([row, col - 1]);
          fresh--;
        }

        // Right
        if (col < cols - 1 && grid[row][col + 1] === 1) {
          // Mark rotten, add to queue, decrease fresh
          grid[row][col + 1] = 2;
          queue.push([row, col + 1]);
          fresh--;
        }
      }

      minutes++;
    }

    // Return minutes if fresh is 0; otherwise return -1
    return fresh === 0 ? minutes : -1;
  }
}
