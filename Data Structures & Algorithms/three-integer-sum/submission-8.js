class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  threeSum(nums) {
    let sortedArray = nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < sortedArray.length; i++) {
      const a = sortedArray[i];
      if (i > 0 && a === sortedArray[i - 1]) {
        continue;
      }
      if (a > 0) {
        break;
      }
      let left = i + 1;
      let right = sortedArray.length - 1;
      while (left < right) {
        let threeSum = a + sortedArray[left] + sortedArray[right];
        if (threeSum > 0) {
          right--;
        } else if (threeSum < 0) {
          left++;
        } else {
          result.push([a, sortedArray[left], sortedArray[right]]);
          left++;
          while (sortedArray[left] === sortedArray[left - 1] && left < right) {
            left++;
          }
        }
      }
    }
    return result;
  }
}
