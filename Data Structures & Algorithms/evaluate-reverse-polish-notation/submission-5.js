class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
  evalRPN(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
      const element = tokens[i];
      {
        if (element === "+") {
          let right = stack.pop();
          let left = stack.pop();
          stack.push(left + right);
        } else if (element === "*") {
          let right = stack.pop();
          let left = stack.pop();
          stack.push(left * right);
        } else if (element === "-") {
          let right = stack.pop();
          let left = stack.pop();
          stack.push(left - right);
        } else if (element === "/") {
          let right = stack.pop();
          let left = stack.pop();
          stack.push(Math.trunc(left / right));
        } else {
          stack.push(Number(element));
        }
      }
    }
    return stack.pop();
  }
}
