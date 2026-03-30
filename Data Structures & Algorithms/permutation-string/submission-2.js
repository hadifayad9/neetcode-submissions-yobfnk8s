class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
   checkInclusion(s1, s2) {
    let s1Array = new Array(26).fill(0);
    let s2Array = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
      s1Array[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let left = 0;
    for (let i = 0; i < s2.length; i++) {
      let isMatched = true;
      s2Array[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
      if (i - left + 1 > s1.length) {
        s2Array[s2[left].charCodeAt(0) - "a".charCodeAt(0)]--;
        left++;
      }
      if (i - left + 1 === s1.length) {
        for (let j = 0; j < s1Array.length; j++) {
          if (s1Array[j] !== s2Array[j]) {
            isMatched = false;
          }
        }
        if (isMatched) {
          return true;
        }
      }
    }
    return false;
  }
}
