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
    let binaryTreeQueue = [root];
    let result = [];
    let counter = 0;
    while (counter !== binaryTreeQueue.length) {
      let binaryTreeQueueLength = binaryTreeQueue.length;
      let levels = [];
      for (let i = counter; i < binaryTreeQueueLength; i++) {
        let node = binaryTreeQueue[counter++];
        levels.push(node.val);
        if (node.left) {
          binaryTreeQueue.push(node.left);
        }
        if (node.right) {
          binaryTreeQueue.push(node.right);
        }
      }
      result.push(levels);
    }
    return result;
  }
}
