class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
  longestConsecutive(nums) {
    if (nums.length === 0) {
      return 0;
    }
    const numsSet = new Set(nums);
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
      let currentLength = 0;
      if (!numsSet.has(nums[i] - 1)) {
        currentLength++;
        let currentNumber = nums[i];
        while (numsSet.has(currentNumber + 1)) {
          currentNumber++;
          currentLength++;
        }
      }
      maxLength = Math.max(maxLength, currentLength);
    }
    return maxLength;
  }
}
