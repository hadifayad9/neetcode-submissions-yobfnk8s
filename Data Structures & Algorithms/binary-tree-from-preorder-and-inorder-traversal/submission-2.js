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
      let rootValue = preorder[0];
      let inOrderIndex = inorder.indexOf(rootValue);
      let mid = inOrderIndex;

      let leftInOrder = inorder.slice(0, mid);
      let rightInOrder = inorder.slice(mid + 1);

      let leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
      let rightPreOrder = preorder.slice(leftInOrder.length + 1);

      let root = new TreeNode(rootValue);

      root.left = dfs(leftPreOrder, leftInOrder);
      root.right = dfs(rightPreOrder, rightInOrder);

      return root;
    }
    return dfs(preorder, inorder);
  }
}
