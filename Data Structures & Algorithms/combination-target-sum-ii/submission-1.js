class Solution {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target) {
    const result = [];
    let path = [];
    candidates.sort((a, b) => a - b);
    function dfs(i, newTotal) {
      if (newTotal === target) {
        result.push([...path]);
        return;
      }
      if (newTotal > target) {
        return;
      }
      if (i >= candidates.length) {
        return;
      }
      path.push(candidates[i]);
      dfs(i + 1, newTotal + candidates[i]);

      path.pop();
      while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
        i += 1;
      }
      dfs(i + 1, newTotal);
    }
    dfs(0, 0);
    return result;
  }
}
