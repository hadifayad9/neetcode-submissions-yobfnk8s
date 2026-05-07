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
    let isValidBinarySearchTree = true;
    function dfs(root) {
      if (!root) {
        return null;
      }
      dfs(root.left);
      if (previousNode && previousNode.val >= root.val) {
        isValidBinarySearchTree = false;
      }
      previousNode = root;
      dfs(root.right);
    }
    dfs(root);
    return isValidBinarySearchTree;
  }
}
