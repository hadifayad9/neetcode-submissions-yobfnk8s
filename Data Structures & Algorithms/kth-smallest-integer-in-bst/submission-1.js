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
    let kthSmallestInt = null;
    function dfs(root) {
      if (!root) {
        return null;
      }
      if (!kthSmallestInt) {
        dfs(root.left);
      }
      counter++;
      if (counter === k) {
        kthSmallestInt = root.val;
      }
      if (!kthSmallestInt) {
        dfs(root.right);
      }
    }
    dfs(root);
    return kthSmallestInt;
  }
}
