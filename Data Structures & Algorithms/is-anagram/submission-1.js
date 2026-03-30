class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
  isAnagram(s, t) {
    let objS = {};
    let objT = {};
    if (s.length !== t.length) {
      return false;
    }
    for (let i = 0; i < s.length; i++) {
      objS[s[i]] = (objS[s[i]] || 0) + 1;
      objT[t[i]] = (objT[t[i]] || 0) + 1;
    }
    for (const key in objS) {
      if (!objT.hasOwnProperty(key)) {
        return false;
      }
      if (objT.hasOwnProperty(key) && objT[key] !== objS[key]) {
        return false;
      }
    }
    return true;
  }
}
