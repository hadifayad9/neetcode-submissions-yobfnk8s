class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
 maxSlidingWindow(nums, k) {
    let dq = [];
    let result = [];
    for (let i = 0; i < k; i++) {
      while (dq.length > 0 && nums[i] > nums[dq[dq.length - 1]]) {
        dq.pop();
      }
      dq.push(i);
    }
    result.push(nums[dq[0]]);
    for (let i = k; i < nums.length; i++) {
      if (i - k + 1 > dq[0]) {
        dq.shift();
      }
      while (dq.length > 0 && nums[i] > nums[dq[dq.length - 1]]) {
        dq.pop();
      }
      dq.push(i);
      result.push(nums[dq[0]]);
    }
    return result;
  }
}
