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
        if (stack && obj[s[i]] === stack[stack.length - 1]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(s[i]);
      }
    }
    return stack.length === 0 ? true : false;
  }
}
