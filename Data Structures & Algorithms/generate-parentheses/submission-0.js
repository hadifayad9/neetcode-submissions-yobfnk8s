class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
  generateParenthesis(n) {
    let result = [];
    let str = [];
    function dfs(open, close) {
      if (str.length === n * 2 && open === 0 && close === 0) {
        result.push([...str].join(''));
        return;
      }
      if (open > 0) {
        str.push('(');
        dfs(open - 1, close);
        str.pop();
      }
      if (close > open) {
        str.push(')');
        dfs(open, close - 1);
        str.pop();
      }
    }
    dfs(n, n);
    return result;
  }
}
