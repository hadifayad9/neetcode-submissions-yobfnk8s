class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  subsetsWithDup(nums) {
    let subset = [];
    let result = [];
    nums.sort((a, b) => a - b);
    function dfs(i) {
      if (i >= nums.length) {
        result.push([...subset]);
        return;
      }
      subset.push(nums[i]);
      dfs(i + 1);

      subset.pop();
      let next = i + 1;
      while (i < nums.length && nums[i] === nums[next]) {
        next = next + 1;
      }
      dfs(next);
    }
    dfs(0);
    return result;
  }
}
