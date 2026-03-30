class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
   search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let middle = Math.floor(left + right);
      if (target === nums[middle]) {
        return middle;
      }
      if (nums[left] <= nums[middle]) {
        if (target >= nums[left] && target < nums[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      } else {
        if (target <= nums[right] && target > nums[middle]) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
    }
    return -1;
  }
}
