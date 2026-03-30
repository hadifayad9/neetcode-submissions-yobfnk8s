class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
   lengthOfLongestSubstring(s) {
    let best = 0;
    let left = 0;
    let hashWindow = {};
    let lastIndex = 0;
    for (let i = 0; i < s.length; i++) {
      if (!hashWindow.hasOwnProperty(s[i])) {
        hashWindow[s[i]] = i;
      } else {
        lastIndex = hashWindow[s[i]] + 1;
        left = Math.max(left, lastIndex);
        hashWindow[s[i]] = i;
      }
      best = Math.max(best, i - left + 1);
    }
    return best;
  }
}
