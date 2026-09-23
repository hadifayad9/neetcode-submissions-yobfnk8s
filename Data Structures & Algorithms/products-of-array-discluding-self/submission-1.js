class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
  productExceptSelf(nums) {
    const prefix = new Array(nums.length).fill(1);
    const postfix = new Array(nums.length).fill(1);
    const output = new Array(nums.length).fill(1);

    for (let i = 1; i < prefix.length; i++) {
      prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    for (let i = postfix.length - 2; i >= 0; i--) {
      postfix[i] = postfix[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < output.length; i++) {
      output[i] = prefix[i] * postfix[i];
    }

    return output;
  }
}
