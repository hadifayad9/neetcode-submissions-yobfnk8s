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
    let kthSmallest = null;
    let counter = 0;
    function dfs(root, k) {
      if (!root) {
        return null;
      }
      if (!kthSmallest) {
        dfs(root.left, k);
      }
      counter++;
      if (counter === k) {
        kthSmallest = root;
      }
      if (!kthSmallest) {
        dfs(root.right, k);
      }
    }
    dfs(root, k);
    return kthSmallest.val;
  }
}
