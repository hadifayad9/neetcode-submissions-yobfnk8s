class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  largestRectangleArea(heights) {
    let maxArea = 0;
    let stack = [];
    heights.push(0);
    for (let i = 0; i < heights.length; i++) {
      while (
        stack.length > 0 &&
        heights[i] < heights[stack[stack.length - 1]]
      ) {
        let middle = stack.pop();
        let h = heights[middle];
        const right = i;
        const left = stack.length === 0 ? -1 : stack[stack.length - 1];
        const width = right - left - 1;
        const area = h * width;
        maxArea = Math.max(maxArea, area);
      }
      stack.push(i);
    }
    return maxArea;
  }
}
