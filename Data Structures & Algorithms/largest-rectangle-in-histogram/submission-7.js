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
        let middle = stack.pop();
        let left = stack.length === 0 ? -1 : stack[stack.length - 1];
        let right = i;
        let width = right - 1 - (left + 1) + 1;
        maxArea = Math.max(maxArea, width * heights[middle]);
      }

      stack.push(i);
    }
    return maxArea;
  }
}
