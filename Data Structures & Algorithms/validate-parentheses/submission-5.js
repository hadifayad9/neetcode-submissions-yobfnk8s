class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isValid(s) {
    if (s.length % 2 === 1) {
      return false;
    }
    let obj = {
      "}": "{",
      "]": "[",
      ")": "(",
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (obj.hasOwnProperty(s[i])) {
        if (stack && stack[stack.length - 1] === obj[s[i]]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(s[i]);
      }
    }
    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
