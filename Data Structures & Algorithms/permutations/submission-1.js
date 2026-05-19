class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let permutations = [];
        let used = new Array(nums.length).fill(false);
        function dfs(){
            if(permutations.length === nums.length){
                result.push([...permutations]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if(used[i]) continue;
                
                permutations.push(nums[i])
                used[i] = true;
                dfs();
                permutations.pop();
                used[i] = false
            }

        }
        dfs();
        return result;
    }
}
