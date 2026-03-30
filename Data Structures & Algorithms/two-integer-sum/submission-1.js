class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
  twoSum(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (obj.hasOwnProperty(nums[i])) {
        return [obj[nums[i]], i];
      }
      obj[complement] = i;
    }
  }
}
