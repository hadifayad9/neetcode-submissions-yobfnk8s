class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
  combinationSum2(candidates, target) {
    let result = [];
    let subset = [];
    candidates.sort((a, b) => a - b);
    function dfs(i, total) {
      if (total === target) {
        result.push([...subset]);
        return;
      }
      if (total > target || i === candidates.length) {
        return;
      }
      subset.push(candidates[i]);
      dfs(i + 1, total + candidates[i]);
      subset.pop();
      let next = i + 1;
      while (candidates[i] === candidates[next]) {
        next = next + 1;
      }
      dfs(next, total);
    }
    dfs(0, 0);
    return result;
  }
}
