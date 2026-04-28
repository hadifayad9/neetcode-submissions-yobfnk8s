class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
  lengthOfLongestSubstring(s) {
    let left = 0;
    let obj = {};
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
      if (!obj.hasOwnProperty(s[i])) {
        obj[s[i]] = i;
      } else {
        left = Math.max(left, obj[s[i]] + 1);
        obj[s[i]] = i;
      }
      maxLength = Math.max(maxLength, i - left + 1);
    }
    return maxLength;
  }
}
