class Solution {
  combinationSum(nums, target) {
    let result = [];
    let subset = [];
    function dfs(i, total) {
      if (total === target) {
        result.push([...subset]);
        return;
      }
      if (total > target || i === nums.length) {
        return;
      }
      subset.push(nums[i]);
      dfs(i, total + nums[i]);
      subset.pop();
      dfs(i + 1, total);
    }
    dfs(0, 0);
    return result;
  }
}