class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
  evalRPN(tokens) {
    let stack = [];
    let result = 0;
    for (let i = 0; i < tokens.length; i++) {
      const element = tokens[i];
      if (
        element === "+" ||
        element === "*" ||
        element === "-" ||
        element === "/"
      ) {
        if (element === "+") {
          let right = stack.pop();
          let left = stack.pop();
          result = left + right;
        }
        if (element === "*") {
          let right = stack.pop();
          let left = stack.pop();
          result = left * right;
        }
        if (element === "-") {
          let right = stack.pop();
          let left = stack.pop();
          result = left - right;
        }
        if (element === "/") {
          let right = stack.pop();
          let left = stack.pop();
          result = Math.trunc(left / right);
        }
        stack.push(result);
        result = 0;
      } else {
        stack.push(Number(element));
      }
    }
    return stack[0];
  }
}
