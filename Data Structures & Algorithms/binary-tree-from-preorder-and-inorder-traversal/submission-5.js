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
      let rootValue = preorder[0];
      let mid = inorder.indexOf(rootValue);

      let inorderLeft = inorder.slice(0, mid);
      let inorderRight = inorder.slice(mid + 1);

      let preorderLeft = preorder.slice(1, inorderLeft.length + 1);
      let preorderRight = preorder.slice(inorderLeft.length + 1);

      let root = new TreeNode(rootValue);

      root.left = dfs(preorderLeft, inorderLeft);
      root.right = dfs(preorderRight, inorderRight);

      return root;
    }
    return dfs(preorder, inorder);
  }
}
