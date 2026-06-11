class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
  combinationSum(nums, target) {
    let path = [];
    let result = [];
    function dfs(i, total) {
      if (total === target) {
        result.push([...path]);
        return;
      }
      if (total > target || i >= nums.length) {
        return;
      }
      path.push(nums[i]);

      dfs(i, nums[i] + total);

      path.pop();

      dfs(i + 1, total);
    }
    dfs(0, 0);
    return result
  }
}
