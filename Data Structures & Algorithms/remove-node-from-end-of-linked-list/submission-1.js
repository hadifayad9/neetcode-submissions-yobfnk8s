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
     * @param {number} n
     * @return {ListNode}
     */
  removeNthFromEnd(head, n) {
    let dummyNode = new ListNode();
    dummyNode.next = head;
    let fast = dummyNode;
    let slow = dummyNode;
    for (let i = 0; i < n + 1; i++) {
      fast = fast.next;
    }
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummyNode.next;
  }
}
