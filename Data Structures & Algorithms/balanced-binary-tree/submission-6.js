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
     * @return {boolean}
     */
  isBalanced(root) {
    let isBalanced = true;
    function dfs(root) {
      if (!root) {
        return 0;
      }
      let left = dfs(root.left);
      let right = dfs(root.right);

      if (left - right > 1 || right - left > 1) {
        isBalanced = false;
      }

      return 1 + Math.max(left, right);
    }
    dfs(root);
    return isBalanced;
  }
}
