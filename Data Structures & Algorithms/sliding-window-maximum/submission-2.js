class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
  maxSlidingWindow(nums, k) {
    let queue = [];
    let result = [];
    for (let i = 0; i < k; i++) {
      while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
        queue.pop();
      }
      queue.push(i);
    }
    result.push(nums[queue[0]]);
    for (let i = k; i < nums.length; i++) {
      if (i - k + 1 > queue[0]) {
        queue.shift();
      }
      while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
        queue.pop();
      }
      queue.push(i);
      result.push(nums[queue[0]]);
    }
    return result;
  }
}
