class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {    
    let right = nums.length - 1;
    let left = 0;
    while (left < right) {
      let middle = Math.floor((left + right) / 2);

      if (nums[right] < nums[middle]) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }
    return nums[right];}
}
