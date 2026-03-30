class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
  checkInclusion(s1, s2) {
    let left = 0;
    let arrayA = new Array(26).fill(0);
    let arrayB = new Array(26).fill(0);
    let isMatched = true;
    for (let i = 0; i < s1.length; i++) {
      arrayA[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    for (let i = 0; i < s2.length; i++) {
      arrayB[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
      if (i - left + 1 > s1.length) {
        arrayB[s2[left].charCodeAt(0) - "a".charCodeAt(0)]--;
        left++;
      }
      if (i - left + 1 == s1.length) {
        isMatched = true;
        for (let a = 0; a < arrayA.length; a++) {
          if (arrayA[a] !== arrayB[a]) {
            isMatched = false;
            break;
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
