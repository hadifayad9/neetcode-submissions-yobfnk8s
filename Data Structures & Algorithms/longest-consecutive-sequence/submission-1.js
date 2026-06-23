class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
  longestConsecutive(nums) {
    if (nums.length === 0) {
      return 0;
    }
    const numSet = new Set(nums);
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
      if (!numSet.has(nums[i] - 1)) {
        let currentLength = 1;
        let currentNumber = nums[i];
        while (numSet.has(currentNumber + 1)) {
          currentLength++;
          currentNumber++;
        }
        maxLength = Math.max(maxLength, currentLength);
      }
    }
    return maxLength;
  }
}
