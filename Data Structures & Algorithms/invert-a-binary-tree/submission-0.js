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
     * @return {TreeNode}
     */
  invertTree(root) {
    if(!root){
        return null
    }
    let binaryTreeQueue = [root];
    while (binaryTreeQueue.length !== 0) {
      let node = binaryTreeQueue.shift();
      let nodeLeft = node.left;
      let nodeRight = node.right;
      node.left = nodeRight;
      node.right = nodeLeft;
      if (node.left) {
        binaryTreeQueue.push(node.left);
      }
      if (node.right) {
        binaryTreeQueue.push(node.right);
      }
    }
    return root;
  }
}
