class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    if (matrix.length === 0) {
      return false;
    }
    let low = 0;
    let hi = matrix.length - 1;
    let foundRow = 0;

    while (low <= hi) {
      let middle = Math.floor((low + hi) / 2);
      let rowFirst = matrix[middle][0];
      let rowLast = matrix[middle][matrix[middle].length - 1];

      if (rowLast < target) {
        low = middle + 1;
      } else if (rowFirst > target) {
        hi = middle - 1;
      } else {
        foundRow = middle;
        break;
      }
    }

    let left = 0;
    let right = matrix[foundRow].length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      if (matrix[foundRow][middle] < target) {
        left = middle + 1;
      } else if (matrix[foundRow][middle] > target) {
        right = middle - 1;
      } else {
        return true;
      }
    }
    return false;
    }
}
