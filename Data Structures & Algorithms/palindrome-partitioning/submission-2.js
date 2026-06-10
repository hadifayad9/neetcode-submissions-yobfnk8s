class Solution {
  partition(s) {
    let palinString = [];
    let result = [];
    function dfs(start) {
      if (start === s.length) {
        result.push([...palinString]);
        return;
      }
      for (let end = start; end < s.length; end++) {
        let subString = s.slice(start, end + 1);
        if (!isPalindrome(subString)) {
          continue;
        }
        palinString.push(subString);
        dfs(end + 1);
        palinString.pop();
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