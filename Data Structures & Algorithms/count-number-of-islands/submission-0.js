class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
            if (!grid || grid.length === 0) return 0;
    
    let islandCount = 0;
    const totalRows = grid.length;
    const totalCols = grid[0].length;
    
    // Helper function for Depth-First Search
    function dfs(r, c) {
        // Base case: check for out-of-bounds or if the cell is water ('0')
        if (r < 0 || c < 0 || r >= totalRows || c >= totalCols || grid[r][c] === '0') {
            return;
        }
        
        // Mark the current land cell as visited by sinking it (turning it to '0')
        grid[r][c] = '0';
        
        // Explore all 4 adjacent directions (up, down, left, right)
        dfs(r - 1, c); // Up
        dfs(r + 1, c); // Down
        dfs(r, c - 1); // Left
        dfs(r, c + 1); // Right
    }
    
    // Iterate through every cell in the 2D grid
    for (let r = 0; r < totalRows; r++) {
        for (let c = 0; c < totalCols; c++) {
            // When we find an unvisited land cell ('1'), it's a new island
            if (grid[r][c] === '1') {
                islandCount++;
                // Destroy/sink the entire connected island using DFS
                dfs(r, c);
            }
        }
    }
    
    return islandCount;
    }
}
