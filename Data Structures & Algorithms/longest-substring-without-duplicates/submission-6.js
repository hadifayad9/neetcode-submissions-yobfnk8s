class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
  lengthOfLongestSubstring(s) {
    let left = 0;
    let obj = {};
    let longestSubstring = 0;
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      if (!obj.hasOwnProperty(element)) {
        obj[s[i]] = i;
      } else {
        left = Math.max(left, obj[s[i]] + 1);
        obj[s[i]] = i;
      }
      longestSubstring = Math.max(longestSubstring, i - left + 1);
    }
    return longestSubstring;
  }
}
