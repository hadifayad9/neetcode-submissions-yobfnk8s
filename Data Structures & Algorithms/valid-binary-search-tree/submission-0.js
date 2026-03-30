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
    let isValidBinaryTree = true;
    function dfs(root) {
      if (!root) {
        return null;
      }
      dfs(root.left);
      if (previousNode && root.val <= previousNode.val) {
        isValidBinaryTree = false;
      }
      previousNode = root;
      dfs(root.right);
    }
    dfs(root, previousNode);
    return isValidBinaryTree;
  }
}
