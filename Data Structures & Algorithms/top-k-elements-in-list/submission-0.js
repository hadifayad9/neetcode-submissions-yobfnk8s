class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
            let obj = {};
    let highestFrequency = [];
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (!obj[element]) {
        obj[element] = 1;
      } else {
        obj[element] += 1;
      }
    }
    const entries = Object.entries(obj);
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
      const element = sorted[i];
      highestFrequency.push(element[0]);
    }
    return highestFrequency;
    }
}
