class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  maxArea(heights) {
    let total = 0;
    let left = 0;
    let right = heights.length - 1;
    let maxAmount = 0;
    while (left < right) {
      total = Math.min(heights[left], heights[right]) * (right - left);
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
      maxAmount = Math.max(maxAmount, total);
    }
    return maxAmount;
  }
}
