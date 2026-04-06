class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums) {
    const res = [];
    const subset = [];

    function dfs(i) {
      if (i >= nums.length) {
        res.push([...subset]);
        return;
      }

      // decision to include nums[i]
      subset.push(nums[i]);
      dfs(i + 1);

      // decision NOT to include nums[i]
      subset.pop();
      dfs(i + 1);
    }

    dfs(0);
    return res;
  }
}
