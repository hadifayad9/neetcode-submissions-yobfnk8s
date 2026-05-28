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
        // get substring
        let subString = s.slice(start, end + 1);
        // check if palindrome
        if (!isPalindrome(subString)) {
          continue;
        }
        // choose
        palindromicSubString.push(subString);
        // recurse
        dfs(end + 1);
        // undo
        palindromicSubString.pop();
      }
    }
    function isPalindrome(subString) {
      let left = 0;
      let right = subString.length - 1;

      while (left < right) {
        if (subString[left] !== subString[right]) {
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