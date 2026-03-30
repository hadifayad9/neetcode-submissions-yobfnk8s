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
     * @return {number[]}
     */
  rightSideView(root) {
    if (!root) {
      return [];
    }
    let binaryTreeQueue = [root];
    let result = [];
    while (binaryTreeQueue.length !== 0) {
      let binaryTreeQueueLength = binaryTreeQueue.length;
      for (let i = 0; i < binaryTreeQueueLength; i++) {
        let node = binaryTreeQueue.shift();
        if (i === binaryTreeQueueLength - 1) {
          result.push(node.val);
        }
        if (node.left) {
          binaryTreeQueue.push(node.left);
        }
        if (node.right) {
          binaryTreeQueue.push(node.right);
        }
      }
    }
    return result;
  }
}
