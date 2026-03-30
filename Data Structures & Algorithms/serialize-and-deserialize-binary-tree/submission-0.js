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
    if (!root) return "";

    const result = [];
    const queue = [root];

    while (queue.length) {
      const node = queue.shift();

      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push("null");
      }
    }

    // Remove useless trailing nulls
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
    const serializedArray = data.split(",");
    const root = new TreeNode(Number(serializedArray[0]));
    const desarlizedQueue = [root];

    let i = 1;
    while (desarlizedQueue.length && i < serializedArray.length) {
      const node = desarlizedQueue.shift();

      if (i < serializedArray.length && serializedArray[i] !== "null") {
        node.left = new TreeNode(Number(serializedArray[i]));
        desarlizedQueue.push(node.left);
      }
      i++;

      if (i < serializedArray.length && serializedArray[i] !== "null") {
        node.right = new TreeNode(Number(serializedArray[i]));
        desarlizedQueue.push(node.right);
      }
      i++;
    }
    return root;
  }
}
