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
    const count = {};

    for (let i = 0; i < s.length; i++) {
      count[s[i]] = (count[s[i]] || 0) + 1;
      count[t[i]] = (count[t[i]] || 0) - 1;
    }

    for (const key in count) {
      if (count[key] !== 0) return false;
    }

    return true;
  }
}
