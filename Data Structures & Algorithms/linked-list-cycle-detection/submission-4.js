/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
  hasCycle(head) {
    if (!head) {
      return false;
    }
    let first = head;
    let second = first.next ? first.next : null;
    while (second && second.next !== null) {
      if (first === second) {
        return true;
      }
      first = first.next;
      second = second.next.next;
    }
    return false;
  }
}
