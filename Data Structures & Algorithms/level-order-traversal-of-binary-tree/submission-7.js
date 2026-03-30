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
     * @return {number[][]}
     */
  levelOrder(root) {
    if (!root) {
      return [];
    }
    let result = [];
    let binaryTreeQueue = [root];
    while (binaryTreeQueue.length !== 0) {
      const level = [];
      const binaryTreeQueueLength = binaryTreeQueue.length;
      for (let i = 0; i < binaryTreeQueueLength; i++) {
        const node = binaryTreeQueue.shift();
        level.push(node.val);
        if (node.left) {
          binaryTreeQueue.push(node.left);
        }
        if (node.right) {
          binaryTreeQueue.push(node.right);
        }
      }
      result.push(level);
    }
    return result;
  }
}
