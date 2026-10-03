class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let obj = {};
    for (let i = 0; i < nums.length; i++) {
      if (!obj.hasOwnProperty(nums[i])) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
      } else {
        return true;
      }
    }
    return false;
    }
}
