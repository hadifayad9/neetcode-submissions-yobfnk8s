class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
  trap(height) {
    let total = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    while (left < right) {
      if (leftMax < rightMax) {
        left++;
        leftMax = Math.max(leftMax, height[left]);
        total += leftMax - height[left];
      } else {
        right--;
        rightMax = Math.max(rightMax, height[right]);
        total += rightMax - height[right];
      }
    }
    return total;
  }
}
