class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
  characterReplacement(s, k) {
    let left = 0;
    let obj = {};
    let maxSoFar = 0;
    let longestChar = 0;
    for (let i = 0; i < s.length; i++) {
      obj[s[i]] = (obj[s[i]] || 0) + 1;
      maxSoFar = Math.max(maxSoFar, obj[s[i]]);
      if (i - left + 1 - maxSoFar > k) {
        obj[s[left]]--;
        left++;
      }
      longestChar = Math.max(longestChar, i - left + 1);
    }
    return longestChar;
  }
}
