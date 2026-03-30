class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
  characterReplacement(s, k) {
    let obj = {};
    let maxSoFar = 0;
    let left = 0;
    let longestDistance = 0;
    for (let i = 0; i < s.length; i++) {
      obj[s[i]] = (obj[s[i]] || 0) + 1;
      maxSoFar = Math.max(maxSoFar, obj[s[i]]);
      while (i - left + 1 - maxSoFar > k) {
        obj[s[left]]--;
        left++;
      }
      longestDistance = Math.max(longestDistance, i - left + 1);
    }
    return longestDistance;
  }
}
