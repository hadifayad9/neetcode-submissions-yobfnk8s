class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
  topKFrequent(nums, k) {
    let obj = {};
    let sortedArray = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    for (let frequent in obj) {
      sortedArray.push([frequent, obj[frequent]]);
    }
    sortedArray.sort((a, b) => b[1] - a[1]);
    for (let index = 0; index < k; index++) {
      result.push(Number(sortedArray[index][0]));
    }
    return result;
  }
}
