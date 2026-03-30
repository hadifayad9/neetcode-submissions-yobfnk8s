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
    let goodNodes = 0;
    let maxSoFar = root.val;
    function dfs(root, maxSoFar) {
      if (!root) {
        return null;
      }
      if (root.val >= maxSoFar) {
        goodNodes++;
        maxSoFar = root.val;
      }
      dfs(root.left, maxSoFar);
      dfs(root.right, maxSoFar);
    }
    dfs(root, maxSoFar);
    return goodNodes;
  }
}
