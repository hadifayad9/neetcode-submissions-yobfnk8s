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
        let result = [];
        let binaryTreeQueue = [root];
        if(!root){
            return []
        }
        while(binaryTreeQueue.length !== 0){
            let levels = []
            let binaryTreeQueueLength = binaryTreeQueue.length;
            for(let i = 0; i < binaryTreeQueueLength; i++){
                const node = binaryTreeQueue.shift();
                levels.push(node.val);
                if(node.left){
                    binaryTreeQueue.push(node.left);
                }
                if(node.right){
                    binaryTreeQueue.push(node.right);
                }
            }
            result.push(levels);
        }
        return result;
    }
}
