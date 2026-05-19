class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  subsetsWithDup(nums) {
    let result = [];
    let subset = [];
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
      while (i < nums.length - 1 && nums[i] === nums[next]) {
        next = next + 1;
      }
      dfs(next);
    }
    dfs(0);
    return result;
  }
}
