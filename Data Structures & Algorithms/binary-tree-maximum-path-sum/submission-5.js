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
    let maxPath = -Infinity;
    function dfs(root) {
      if (!root) {
        return 0;
      }
      let left = Math.max(0, dfs(root.left));
      let right = Math.max(0, dfs(root.right));

      maxPath = Math.max(maxPath, root.val + left + right);

      return root.val + Math.max(left, right);
    }
    dfs(root);
    return maxPath;
  }
}
