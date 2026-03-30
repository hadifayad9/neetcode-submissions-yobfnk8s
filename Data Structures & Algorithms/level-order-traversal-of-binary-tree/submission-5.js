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
    while (binaryTreeQueue.length !== 0) {
      let binaryTreeQueuelength = binaryTreeQueue.length;
      let levels = [];
      for (let i = 0; i < binaryTreeQueuelength; i++) {
        let node = binaryTreeQueue.shift();
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
