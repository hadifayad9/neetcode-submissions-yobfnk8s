class Solution {
  subsets(nums) {
    let subset = [];
    let result = [];
    function dfs(i) {
      if (i >= nums.length) {
        result.push([...subset]);
        return;
      }
      subset.push(nums[i]);
      dfs(i + 1);

      subset.pop();
      dfs(i + 1);
    }
    dfs(0);
    return result;
  }
}