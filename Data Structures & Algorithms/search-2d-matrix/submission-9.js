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
    let high = matrix.length - 1;
    let foundRow = 0;
    while (low <= high) {
      let middle = Math.floor((low + high) / 2);
      let firstRowValue = matrix[middle][0];
      let lastRowValue = matrix[middle][matrix[middle].length - 1];
      if (target < firstRowValue) {
        high = middle - 1;
      } else if (target > lastRowValue) {
        low = middle + 1;
      } else {
        foundRow = middle;
        break;
      }
    }
    let left = 0;
    let right = matrix[foundRow].length - 1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (target > matrix[foundRow][middle]) {
        left = middle + 1;
      } else if (target < matrix[foundRow][middle]) {
        right = middle - 1;
      } else {
        return true;
      }
    }
    return false;
  }
}
