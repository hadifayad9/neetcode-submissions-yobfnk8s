class Solution {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target) {
    const result = [];
    const path = [];

    candidates.sort((a, b) => a - b);

    function dfs(i, total) {
      if (total === target) {
        result.push([...path]);
        return;
      }

      if (total > target || i >= candidates.length) {
        return;
      }

      path.push(candidates[i]);
      dfs(i + 1, total + candidates[i]);
      path.pop();

      let next = i + 1;
      while (next < candidates.length && candidates[next] === candidates[i]) {
        next++;
      }

      dfs(next, total);
    }

    dfs(0, 0);
    return result;
  }
}
