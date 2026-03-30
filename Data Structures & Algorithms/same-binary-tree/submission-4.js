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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
  isSameTree(p, q) {
    if (!p && !q) {
      return true;
    }
    if ((p && q === null) || (q && p === null) || p.val !== q.val) {
      return false;
    }
    let isSameLeft = this.isSameTree(p.left, q.left);
    let isSameRight = this.isSameTree(p.right, q.right);

    return isSameLeft && isSameRight;
  }
}
