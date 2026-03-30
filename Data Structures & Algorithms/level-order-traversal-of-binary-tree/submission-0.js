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
        let results = [];
        if(!root){
            return []
        };
        let binaryQueue = [root];
        while(binaryQueue.length !== 0){
            let binaryQueueLength = binaryQueue.length;
            let level = [];
            for(let i = 0; i < binaryQueueLength; i++){
                let node = binaryQueue.shift();
                level.push(node.val);
                if(node.left){
                    binaryQueue.push(node.left);
                }
                if(node.right){
                    binaryQueue.push(node.right);
                }
            }
            results.push(level);
        }
        return results;
    }
}
