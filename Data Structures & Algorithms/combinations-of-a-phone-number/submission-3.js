class Solution {
  letterCombinations(digits) {
    if (digits.length === 0) {
      return [];
    }
    let path = [];
    let result = [];
    let numbers = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
    };
    function dfs(index) {
      if (path.length === digits.length) {
        result.push([...path].join(''));
        return;
      }
      let mappedLetters = digits[index];
      for (let i = 0; i < numbers[mappedLetters].length; i++) {
        const element = numbers[mappedLetters][i];
        path.push(element);
        dfs(index + 1);
        path.pop();
      }
    }
    dfs(0);
    return result;
  }
}