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
  diameterOfBinaryTree(root) {
    let depth = 0;
    function dfs(root) {
      if (!root) {
        return null;
      }
      let left = dfs(root.left);
      let right = dfs(root.right);

      depth = Math.max(depth, left + right);

      return 1 + Math.max(left, right);
    }
    dfs(root);
    return depth;
  }
}
