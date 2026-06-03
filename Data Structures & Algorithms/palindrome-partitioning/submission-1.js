class Solution {
  partition(s) {
    let palindromicSubString = [];
    let result = [];
    function dfs(start) {
      if (start === s.length) {
        result.push([...palindromicSubString]);
        return;
      }
      for (let end = start; end < s.length; end++) {
        let subString = s.slice(start, end + 1);

        if (!isPalindrome(subString)) {
          continue;
        }
        palindromicSubString.push(subString);
        dfs(end + 1);
        palindromicSubString.pop();
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