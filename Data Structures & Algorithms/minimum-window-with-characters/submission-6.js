class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
  minWindow(s, t) {
    let tCount = {};
    let sCount = {};
    for (let i = 0; i < t.length; i++) {
      tCount[t[i]] = (tCount[t[i]] || 0) + 1;
    }
    let required = Object.keys(tCount).length;
    let formed = 0;
    let bestLength = Infinity;
    let bestStart = -1;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
      sCount[s[i]] = (sCount[s[i]] || 0) + 1;
      if (tCount.hasOwnProperty(s[i]) && tCount[s[i]] === sCount[s[i]]) {
        formed++;
      }
      while (formed === required) {
        sCount[s[left]]--;
        if (i - left + 1 < bestLength) {
          bestStart = left;
        }
        bestLength = Math.min(bestLength, i - left + 1);
        if (
          tCount.hasOwnProperty(s[left]) &&
          tCount[s[left]] > sCount[s[left]]
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
