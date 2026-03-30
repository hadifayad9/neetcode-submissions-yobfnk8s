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
     * @return {number}
     */
    maxDepth(root) {
    if (!root) {
      return 0;
    }
    let stack = [[root, 1]];
    let maxDepth = 0;
    while (stack.length !== 0) {
      const [node, currentMaxDepth] = stack.pop();
      maxDepth = Math.max(maxDepth, currentMaxDepth);
      if (node.left) {
        stack.push([node.left, currentMaxDepth + 1]);
      }
      if (node.right) {
        stack.push([node.right, currentMaxDepth + 1]);
      }
    }
    return maxDepth;
    }
}
