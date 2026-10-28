/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
  cloneGraph(node) {
    if (!node) {
      return null;
    }
    let visited = new Map();
    function dfs(node) {
      if (visited.has(node)) {
        return visited.get(node);
      }
      let clone = new Node(node.val);
      visited.set(node, clone);
      for (const neighbor of node.neighbors) {
        clone.neighbors.push(dfs(neighbor));
      }
      return clone;
    }
    return dfs(node);
  }
}