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
    while (result && result[result.length - 1] === "null") {
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
    let searlizedData = data.split(",");
    let root = new TreeNode(Number(searlizedData[0]));
    let deserializeQueue = [root];
    let i = 1;
    while (i < searlizedData.length) {
      let node = deserializeQueue.shift();

      if (i < searlizedData.length && searlizedData[i] !== "null") {
        node.left = new TreeNode(Number(searlizedData[i]));
        deserializeQueue.push(node.left);
      }
      i++;
      if (i < searlizedData.length && searlizedData[i] !== "null") {
        node.right = new TreeNode(Number(searlizedData[i]));
        deserializeQueue.push(node.right);
      }
      i++;
    }
    return root;
  }
}
