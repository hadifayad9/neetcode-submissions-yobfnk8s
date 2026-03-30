/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
  maxPathSum(root) {
    let maxSum = -Infinity;
    function dfs(root) {
      if (!root) {
        return 0;
      }
      let leftGain = Math.max(dfs(root.left), 0);
      let rightGain = Math.max(dfs(root.right), 0);

      maxSum = Math.max(maxSum, root.val + leftGain + rightGain);
      return root.val + Math.max(leftGain, rightGain);
    }
    dfs(root);
    return maxSum;
  }
}
