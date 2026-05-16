class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
  combinationSum2(candidates, target) {
    let path = [];
    let result = [];

    candidates.sort((a, b) => a - b);
    function dfs(i, newTotal) {
      if (newTotal === target) {
        result.push([...path]);
        return;
      }
      if (newTotal > target || i >= candidates.length) {
        return;
      }
      path.push(candidates[i]);
      dfs(i + 1, newTotal + candidates[i]);

      let next = i + 1;
      while (i < candidates.length && candidates[i] === candidates[next]) {
        next = next + 1;
      }
      path.pop();
      dfs(next, newTotal);
    }
    dfs(0, 0);
    return result;
  }
}
