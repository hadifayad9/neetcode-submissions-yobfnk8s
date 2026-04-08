class Solution {
  combinationSum(nums, target) {
    const result = [];
    const path = [];

    function dfs(i) {
      const totalSum = path.reduce((sum, num) => sum + num, 0);

      if (totalSum === target) {
        result.push([...path]);
        return;
      }

      if (totalSum > target) {
        return;
      }

      if (i >= nums.length) {
        return;
      }

      path.push(nums[i]);

      dfs(i);

      path.pop();


      dfs(i + 1);
    }

    dfs(0);
    return result;
  }
}