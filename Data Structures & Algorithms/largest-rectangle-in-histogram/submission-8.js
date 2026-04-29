class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  largestRectangleArea(heights) {
    heights.push(0);
    let maxArea = 0;
    let stack = [];
    for (let i = 0; i < heights.length; i++) {
      while (
        stack.length > 0 &&
        heights[i] < heights[stack[stack.length - 1]]
      ) {
        let middleValue = stack.pop();
        let left = stack.length === 0 ? -1 : stack[stack.length - 1];
        let right = i;
        let width = right - (left + 1);
        let area = heights[middleValue] * width;
        maxArea = Math.max(maxArea, area);
      }
      stack.push(i);
    }
    return maxArea;
  }
}
