class Solution {
  permute(nums) {
    let used = new Array(nums.length).fill(false);
    let permutation = [];
    let result = [];
    function dfs() {
      if (permutation.length === nums.length) {
        result.push([...permutation]);
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        permutation.push(nums[i]);
        used[i] = true;
        dfs();
        permutation.pop();
        used[i] = false;
      }
    }
    dfs();
    return result;
  }
}