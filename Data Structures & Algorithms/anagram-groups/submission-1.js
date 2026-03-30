class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
  groupAnagrams(strs) {
    let obj = {};
    let result = [];
    for (let index = 0; index < strs.length; index++) {
      if (!obj.hasOwnProperty(strs[index].split("").sort().join(""))) {
        obj[strs[index].split("").sort().join("")] = [strs[index]];
      } else {
        obj[strs[index].split("").sort().join("")].push(strs[index]);
      }
    }
    for (const key in obj) {
      result.push(obj[key]);
    }
    return result;
  }
}
