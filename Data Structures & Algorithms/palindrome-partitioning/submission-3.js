class Solution {
  partition(s) {
    let palinString = [];
    let result = [];
    function dfs(i) {
      if (i === s.length) {
        result.push([...palinString]);
        return;
      }
      for (let j = i; j < s.length; j++) {
        let substring = s.slice(i, j + 1);
        if (isPalindrome(substring)) {
          palinString.push(substring);
          dfs(j + 1);
          palinString.pop();
        }
      }
    }
    function isPalindrome(substring) {
      let left = 0;
      let right = substring.length - 1;
      while (left < right) {
        if (substring[left] !== substring[right]) {
          return false;
        }
        left++;
        right--;
      }
      return true;
    }
    dfs(0);
    return result;
  }
}