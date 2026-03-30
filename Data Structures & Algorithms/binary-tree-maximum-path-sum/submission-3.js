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
      let left = Math.max(dfs(root.left), 0);
      let right = Math.max(dfs(root.right), 0);

      maxSum = Math.max(maxSum, root.val + left + right);

      return root.val + Math.max(left, right);
    }
    dfs(root);
    return maxSum;
  }
}
