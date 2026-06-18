class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
  groupAnagrams(strs) {
    let obj = {};
    let result = [];
    for (let words of strs) {
      const word = words.split("").sort().join("");

      if (!obj.hasOwnProperty(word)) {
        obj[word] = [];
      }
      obj[word].push(words);
    }
    for (const value of Object.values(obj)) {
      result.push(value);
    }
    return result;
  }
}
