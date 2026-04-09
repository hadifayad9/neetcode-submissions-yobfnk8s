class Solution {
  combinationSum(nums, target) {
    let result = [];
    let path = [];
    function dfs(i, newTotal) {
      if (newTotal === target) {
        result.push([...path]);
        return;
      }
      if (newTotal > target) {
        return;
      }
      if (i >= nums.length) {
        return;
      }
      path.push(nums[i]);
      dfs(i, newTotal + path[path.length - 1]);

      path.pop();
      dfs(i + 1, newTotal);
    }
    dfs(0, 0);
    return result;
  }
}
