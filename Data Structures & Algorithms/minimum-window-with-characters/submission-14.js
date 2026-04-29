class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
  minWindow(s, t) {
    let tObject = {};
    let sObject = {};
    for (let i = 0; i < t.length; i++) {
      tObject[t[i]] = (tObject[t[i]] || 0) + 1;
    }
    let required = Object.keys(tObject).length;
    let formed = 0;
    let bestLength = Infinity;
    let bestStart = -1;
     let left = 0;
    for (let i = 0; i < s.length; i++) {
      sObject[s[i]] = (sObject[s[i]] || 0) + 1;
      if (tObject.hasOwnProperty(s[i]) && tObject[s[i]] === sObject[s[i]]) {
        formed++;
      }
      while (formed === required) {
        sObject[s[left]]--;
        if (i - left + 1 < bestLength) {
          bestStart = left;
        }
        bestLength = Math.min(bestLength, i - left + 1);

        if (
          tObject.hasOwnProperty(s[left]) &&
          tObject[s[left]] > sObject[s[left]]
        ) {
          formed--;
        }
        left++;
      }
    }
        if (bestLength === Infinity && bestStart === -1) {
      return "";
    }
    return s.slice(bestStart, bestStart + bestLength);
  }
}
