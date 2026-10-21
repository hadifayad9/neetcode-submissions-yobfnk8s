class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
  longestConsecutive(nums) {
    if (nums.length === 0) {
      return 0;
    }
    let longestSet = new Set(nums);
    let maxLength = 0;
    for (const element of longestSet) {
      let currentLength = 0;
      if (!longestSet.has(element - 1)) {
        currentLength++;
        let currentNumber = element;
        while(longestSet.has(currentNumber + 1)) {
          currentLength++;
          currentNumber = currentNumber + 1;
        }
      }
      maxLength = Math.max(maxLength, currentLength);
    }
    return maxLength;
  }
}
