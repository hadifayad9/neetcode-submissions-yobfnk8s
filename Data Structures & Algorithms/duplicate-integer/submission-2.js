class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
  hasDuplicate(nums) {
    let obj = {};
    let containsDuplicate = false;
    for (let i = 0; i < nums.length; i++) {
      if (obj.hasOwnProperty(nums[i])) {
        containsDuplicate = true;
      }
      obj[nums[i]] = 0;
    }
    return containsDuplicate;
  }
}
