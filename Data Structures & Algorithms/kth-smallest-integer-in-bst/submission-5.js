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
     * @param {number} k
     * @return {number}
     */
  kthSmallest(root, k) {
    let counter = 0;
    let kthSmallestNode = null;
    function dfs(root) {
      if (!root) {
        return null;
      }
      if (!kthSmallestNode) {
        dfs(root.left);
      }
      counter++;
      if (counter === k) {
        kthSmallestNode = root;
      }
      if (!kthSmallestNode) {
        dfs(root.right);
      }
    }
    dfs(root);
    return kthSmallestNode.val;
  }
}
