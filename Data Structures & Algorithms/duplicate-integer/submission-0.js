class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}

        if (nums.length === 0 || nums.length === 1) {
            return false;
        }

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if (obj[element]) {
                return true;
            } else {
                obj[element] = true;
            }
        }
        return false;
    }
}
