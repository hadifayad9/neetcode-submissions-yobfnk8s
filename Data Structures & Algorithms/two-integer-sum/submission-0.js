class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
            let obj = {};
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      let complement = target - element;
      if (obj.hasOwnProperty(complement)) {
        return [obj[complement], i];
      } else {
        obj[element] = i;
      }
    }
    return false;
    }
}
