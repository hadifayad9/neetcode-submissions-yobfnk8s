class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
  generateParenthesis(n) {
    let path = [];
    let result = [];

    function dfs(opening, closing) {
      if (path.length === n * 2 && opening === 0 && closing === 0) {
        result.push([...path].join(""));
        return;
      }
      if (opening > 0) {
        path.push("(");
        dfs(opening - 1, closing);
        path.pop();
      }
      if (closing > opening) {
        path.push(")");
        dfs(opening, closing - 1);
        path.pop();
      }
    }

    dfs(n, n);
    return result;
  }
}
