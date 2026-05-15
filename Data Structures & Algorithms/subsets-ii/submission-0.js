class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  subsetsWithDup(nums) {
    let result = [];
    let path = [];
    nums.sort((a, b) => a - b);
    function dfs(i) {
      if (i >= nums.length) {
        result.push([...path]);
        return;
      }
      path.push(nums[i]);
      dfs(i + 1);

      path.pop();
      let next = i + 1;
      while (i < nums.length && nums[i] === nums[next]) {
        next++;
      }
      dfs(next);
    }
    dfs(0);
    return result;
  }
}
