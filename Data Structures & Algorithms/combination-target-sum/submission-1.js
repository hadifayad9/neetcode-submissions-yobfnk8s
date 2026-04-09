class Solution {
  combinationSum(nums, target) {
    const result = [];
    const path = [];

    function dfs(i, newTotalSum) {
      const totalSum = newTotalSum;

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
      let newSum = path[path.length - 1];

      dfs(i, newSum + newTotalSum);


      path.pop();
      dfs(i + 1, newTotalSum);
    }

    dfs(0, 0);
    return result;
  }
}