class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
            let subList = [];
    let obj = {};

    for (let i = 0; i < strs.length; i++) {
      const element = strs[i];
      if (!obj[element.split("").sort().join("")]) {
        obj[element.split("").sort().join("")] = [];
      }
      obj[element.split("").sort().join("")].push(element);
    }
    for (const element in obj) {
      subList.push(obj[element]);
    }
    return subList;
    }
}
