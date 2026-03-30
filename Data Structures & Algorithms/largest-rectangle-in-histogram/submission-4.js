class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  largestRectangleArea(heights) {
    heights.push(0);
    let stack = [];
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
      while (
        stack.length > 0 &&
        heights[i] < heights[stack[stack.length - 1]]
      ) {
        let poppedMiddle = stack.pop();
        let right = i;
        let left = stack.length === 0 ? -1 : stack[stack.length - 1];
        let width = right - 1 - (left + 1) + 1;
        let area = heights[poppedMiddle] * width;
        maxArea = Math.max(maxArea, area);
      }
      stack.push(i);
    }
    return maxArea;
  }
}
