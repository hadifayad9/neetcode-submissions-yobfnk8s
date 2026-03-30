class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
            let obj1 = {};
    if (s.length !== t.length) {
      return false;
    }
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      obj1[element] = (obj1[element] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
      const element = t[i];
      if (obj1[element]) {
        obj1[element] -= 1;
      } else {
        return false;
      }
      if (obj1[element] < 0) {
        return false;
      }
    }
    console.log(obj1);
    return true;
    }
}
