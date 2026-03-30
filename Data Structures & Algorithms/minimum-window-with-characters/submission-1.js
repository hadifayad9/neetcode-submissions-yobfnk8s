class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
 minWindow(s, t) {
    let left = 0;
    let tCount = {};
    let windowMap = {};
    let bestLen = Infinity;
    let bestStart = -1;
    let formed = 0;
    for (let i = 0; i < t.length; i++) {
      tCount[t[i]] = (tCount[t[i]] || 0) + 1;
    }
    const tCountDistinctLetters = Object.keys(tCount).length;
    for (let i = 0; i < s.length; i++) {
      windowMap[s[i]] = (windowMap[s[i]] || 0) + 1;
      if (tCount.hasOwnProperty(s[i]) && windowMap[s[i]] === tCount[s[i]]) {
        formed++;
      }
      if (formed === tCountDistinctLetters) {
        while (formed === tCountDistinctLetters) {
          if (i - left + 1 < bestLen) {
            bestStart = left;
          }
          bestLen = Math.min(bestLen, i - left + 1);
          windowMap[s[left]]--;
          if (
            tCount.hasOwnProperty(s[left]) &&
            windowMap[s[left]] < tCount[s[left]]
          ) {
            formed--;
          }
          left++;
        }
      }
    }
    if (bestLen === Infinity && bestStart === -1) {
      return "";
    }
    return s.slice(bestStart, bestStart + bestLen);
  }
}
