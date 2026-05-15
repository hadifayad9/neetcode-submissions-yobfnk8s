class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  permute(nums) {
    const res = [];
    const currentPermutation = [];
    const used = new Array(nums.length).fill(false);

    function dfs() {
      if (currentPermutation.length === nums.length) {
        res.push([...currentPermutation]);
        return;
      }

      for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        used[i] = true;
        currentPermutation.push(nums[i]);

        dfs();

        currentPermutation.pop();
        used[i] = false;
      }
    }

    dfs();
    return res;
  }
}
