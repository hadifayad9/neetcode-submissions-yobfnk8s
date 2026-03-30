class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;
    while (left < right) {
      let newAreaTotal =
        Math.min(heights[left], heights[right]) * (right - left);
      if (newAreaTotal > maxArea) {
        maxArea = newAreaTotal;
      }
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxArea;
  }
}
