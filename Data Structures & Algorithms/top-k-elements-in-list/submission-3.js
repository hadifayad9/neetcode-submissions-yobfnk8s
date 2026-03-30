class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
  topKFrequent(nums, k) {
    let freq = {};
    for (let num of nums) {
      freq[num] = (freq[num] || 0) + 1;
    }
    let buckets = new Array(nums.length + 1).fill(null).map(() => []);
    for (let num in freq) {
      let count = freq[num];
      buckets[count].push(Number(num));
    }
    let result = [];

    for (let i = buckets.length - 1; i >= 0; i--) {
      for (let num of buckets[i]) {
        result.push(num);
        if (result.length === k) {
          return result;
        }
      }
    }
  }
}
