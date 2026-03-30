class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    let count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
      count[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    }
    for (let i = 0; i < count.length; i++) {
      if (count[i] !== 0) {
        return false;
      }
    }
    return true;
  }
}
