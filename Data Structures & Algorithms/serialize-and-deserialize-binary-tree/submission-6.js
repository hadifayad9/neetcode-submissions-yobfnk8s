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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
  serialize(root) {
    if (!root) {
      return "";
    }
    let binaryTreeQueue = [root];
    let result = [];
    while (binaryTreeQueue.length !== 0) {
      let node = binaryTreeQueue.shift();
      if (node) {
        result.push(node.val);
        binaryTreeQueue.push(node.left);
        binaryTreeQueue.push(node.right);
      } else {
        result.push("null");
      }
    }
    while (result[result.length - 1] === "null") {
      result.pop();
    }
    return result.join(",");
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    if (!data) {
      return null;
    }
    let seializedArray = data.split(",");
    let root = new TreeNode(Number(seializedArray[0]));
    let binaryTreeQueue = [root];
    let i = 1;
    while (binaryTreeQueue.length !== 0 && i < seializedArray.length) {
      let node = binaryTreeQueue.shift();
      if (seializedArray[i] !== "null" && i < seializedArray.length) {
        node.left = new TreeNode(Number(seializedArray[i]));
        binaryTreeQueue.push(node.left);
      }
      i++;
      if (seializedArray[i] !== "null" && i < seializedArray.length) {
        node.right = new TreeNode(Number(seializedArray[i]));
        binaryTreeQueue.push(node.right);
      }
      i++;
    }
    return root;
  }
}
