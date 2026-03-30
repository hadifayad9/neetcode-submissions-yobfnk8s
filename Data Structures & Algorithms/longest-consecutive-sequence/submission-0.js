class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
  longestConsecutive(nums) {
    if (nums.length === 0) {
      return 0;
    }
    let numsSet = new Set(nums);
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
      if (!numsSet.has(nums[i] - 1)) {
        let currentNum = nums[i];
        let currentLength = 1;
        while (numsSet.has(currentNum + 1)) {
          currentNum++;
          currentLength++;
        }
        maxLength = Math.max(maxLength, currentLength);
      }
    }
    return maxLength;
  }
}
