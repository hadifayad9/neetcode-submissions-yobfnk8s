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
      return '';
    }
    let result = [];
    let treeQueue = [root];
    while (treeQueue.length > 0) {
      let node = treeQueue.shift();
      if (node) {
        treeQueue.push(node.left);
        treeQueue.push(node.right);
        result.push(node.val);
      } else {
        result.push('null');
      }
    }
    while (result && result[result.length - 1] === 'null') {
      result.pop();
    }
    return result.join(',');
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
    let joinedData = data.split(',');
    let i = 1;
    let tree = new TreeNode(Number(joinedData[0]));
    let treeQueue = [tree];
    while (treeQueue.length > 0) {
      let node = treeQueue.shift();
      if (i < joinedData.length && joinedData[i] !== 'null') {
        node.left = new TreeNode(Number(joinedData[i]));
        treeQueue.push(node.left);
      }
      i++;
      if (i < joinedData.length && joinedData[i] !== 'null') {
        node.right = new TreeNode(Number(joinedData[i]));
        treeQueue.push(node.right);
      }
      i++;
    }
    return tree;
  }
}
