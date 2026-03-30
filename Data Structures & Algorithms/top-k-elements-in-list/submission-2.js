class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
  topKFrequent(nums, k) {
    let result = [];
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    const entries = Object.entries(obj);
    entries.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < k; i++) {
      result.push(Number(entries.pop()[0]));
    }
    return result;
  }
}
