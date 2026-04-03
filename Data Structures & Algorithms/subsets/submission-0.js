class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
   subsets(nums) {
    const result = [];

    function backtrack(start, path) {
      result.push([...path]);

      for (let i = start; i < nums.length; i++) {
        path.push(nums[i]); // choose
        backtrack(i + 1, path); // explore
        path.pop(); // un-choose
      }
    }

    backtrack(0, []);
    return result;
  }
}
