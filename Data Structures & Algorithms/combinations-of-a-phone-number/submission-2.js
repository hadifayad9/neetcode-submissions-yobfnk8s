class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
  letterCombinations(digits) {
    if (digits.length === 0) {
      return [];
    }
    let path = [];
    let result = [];
    let numbers = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };
    function dfs(position) {
      if (path.length === digits.length) {
        result.push([...path].join(""));
        return;
      }
      let currentLetters = numbers[digits[position]];

      for (const letter of currentLetters) {
        path.push(letter);

        dfs(position + 1);

        path.pop();
      }
    }
    dfs(0);
    return result;
  }
}
