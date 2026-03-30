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
      isValidBST(root) {
    let previousNode = null;
    let isValidBST = true;
    function dfs(root) {
      if (!root) {
        return null;
      }
      dfs(root.left);
      if (previousNode && root.val <= previousNode.val) {
        isValidBST = false;
      }
      previousNode = root;

      dfs(root.right);
    }
    dfs(root);
    return isValidBST;
  }
}
