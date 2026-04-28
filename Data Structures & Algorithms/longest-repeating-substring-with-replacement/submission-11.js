class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
  characterReplacement(s, k) {
    let obj = {};
    let maxSoFar = 0;
    let maxDistance = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
      obj[s[i]] = (obj[s[i]] || 0) + 1;
      maxSoFar = Math.max(maxSoFar, obj[s[i]]);
      while (i - left + 1 - maxSoFar > k) {
        obj[s[left]]--;
        left++;
      }
      maxDistance = Math.max(maxDistance, i - left + 1);
    }
    return maxDistance;
  }
}
