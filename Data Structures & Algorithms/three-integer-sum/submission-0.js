class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  threeSum(nums) {
    let result = [];
    const sortedArray = nums.sort((a, b) => a - b);
    for (let i = 0; i < sortedArray.length; i++) {
      const a = sortedArray[i];
      if (i > 0 && a === nums[i - 1]) {
        continue;
      }
      if (a > 0) {
        break;
      }
      let left = i + 1;
      let right = sortedArray.length - 1;
      while (left < right) {
        if (a + sortedArray[left] + sortedArray[right] > 0) {
          right--;
        } else if (a + sortedArray[left] + sortedArray[right] < 0) {
          left++;
        } else {
          result.push([a, sortedArray[left], sortedArray[right]]);
          left++;
          while (nums[left] === nums[left - 1] && left < right) {
            left++;
          }
        }
      }
    }
    return result;
  }
}
