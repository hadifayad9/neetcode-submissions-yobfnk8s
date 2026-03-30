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
    let maxSoFar = root.val;
    let goodNodes = 0;
    function dfs(root, maxSoFar) {
      if (!root) {
        return 0;
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
