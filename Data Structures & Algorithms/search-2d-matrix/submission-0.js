class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
            for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][matrix[row].length - 1] < target) {
        continue;
      }
      let left = 0;
      let right = matrix[row].length - 1;

      while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (matrix[row][middle] < target) {
          left = middle + 1;
        } else if (matrix[row][middle] > target) {
          right = middle - 1;
        } else {
          return true;
        }
      }
    }
    return false;
    }
}
