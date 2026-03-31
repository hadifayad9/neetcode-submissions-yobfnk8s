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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
  buildTree(preorder, inorder) {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    function dfs(preorder, inorder) {
      if (preorder.length === 0) {
        return null;
      }
      let mid = preorder[0];
      let inOrderMid = inorder.indexOf(mid);

      let inOrderLeft = inorder.slice(0, inOrderMid);
      let inOrderRight = inorder.slice(inOrderMid + 1);

      let preOrderLeft = preorder.slice(1, inOrderLeft.length + 1);
      let preOrderRight = preorder.slice(inOrderLeft.length + 1);

      let root = new TreeNode(mid);

      root.left = dfs(preOrderLeft, inOrderLeft);
      root.right = dfs(preOrderRight, inOrderRight);

      return root;
    }
    return dfs(preorder, inorder);
  }
}
