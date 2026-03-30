class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isValid(s) {
    let stack = [];
    if (s.length === 1 || s.length === 0) {
      return false;
    }
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      if (element === "}" || element === "]" || element === ")") {
        const closingElement = stack.pop();
        if (
          (element === "}" && closingElement !== "{") ||
          (element === "]" && closingElement !== "[") ||
          (element === ")" && closingElement !== "(")
        ) {
          return false;
        }
      } else {
        stack.push(element);
      }
    }
    if (stack.length > 0) {
      return false;
    }
    return true;
  }
}
