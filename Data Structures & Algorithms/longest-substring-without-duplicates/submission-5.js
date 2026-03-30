class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
  lengthOfLongestSubstring(s) {
    let left = 0;
    let longestString = 0;
    let obj = {};
    for (let i = 0; i < s.length; i++) {
      if (!obj.hasOwnProperty(s[i])) {
        obj[s[i]] = i;
      } else {
        left = Math.max(left, obj[s[i]] + 1);
        obj[s[i]] = i;
      }
      longestString = Math.max(longestString, i - left + 1);
    }
    return longestString;
  }
}
