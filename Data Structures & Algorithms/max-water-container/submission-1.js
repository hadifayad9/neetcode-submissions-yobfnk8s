class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let total = 0;
    let prevTotal = 0;
    while (left < right) {
      total = Math.min(heights[left], heights[right]) * (right - left);
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
      if (total > prevTotal) {
        prevTotal = total;
      }
    }
    return prevTotal;
  }
}
