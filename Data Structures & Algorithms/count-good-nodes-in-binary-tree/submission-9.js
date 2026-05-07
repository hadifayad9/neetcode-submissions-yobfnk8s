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
  goodNodes(root) {
    let maxNode = null;
    let goodNodes = 0;
    function dfs(root, maxNode) {
      if (!root) {
        return null;
      }
      if (maxNode === null || root.val >= maxNode.val) {
        maxNode = root;
        goodNodes++;
      }
      dfs(root.left, maxNode);
      dfs(root.right, maxNode);
    }
    dfs(root, maxNode);
    return goodNodes;
  }
}
