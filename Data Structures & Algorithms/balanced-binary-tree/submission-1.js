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
    function dfs(curr) {
      if (!curr) {
        return 0;
      }
      let left = dfs(curr.left);
      let right = dfs(curr.right);

      if (left - right > 1 || right - left > 1) {
        isBalanced = false;
      }

      return 1 + Math.max(left, right);
    }
    dfs(root);
    return isBalanced;
  }
}
