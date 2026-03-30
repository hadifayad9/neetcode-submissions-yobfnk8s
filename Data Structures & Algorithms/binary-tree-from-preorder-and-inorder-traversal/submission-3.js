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
    function dfs(preorder, inorder) {
      if (preorder.length === 0) {
        return null;
      }
      let mid = preorder[0];
      let findInOrderMiddle = inorder.indexOf(mid);
      let inorderLeft = inorder.slice(0, findInOrderMiddle);
      let inorderRight = inorder.slice(findInOrderMiddle + 1);

      let preorderLeft = preorder.slice(1, inorderLeft.length + 1);
      let preorderRight = preorder.slice(inorderLeft.length + 1);

      let root = new TreeNode(mid);

      root.left = dfs(preorderLeft, inorderLeft);
      root.right = dfs(preorderRight, inorderRight);

      return root;
    }
    return dfs(preorder, inorder);
  }
}
