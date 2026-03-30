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
     * @param {number} k
     * @return {ListNode}
     */
  reverseKGroup(head, k) {
    if (!head || k <= 1) {
      return head;
    }
    let top = head;
    let check = top;
    let previousGroupTail = null;
    while (top) {
      let first = top;
      let previousTail = first;
      let second = first.next;
      let isReversable = true;
      for (let i = 0; i < k; i++) {
        if (!check) {
          isReversable = false;
          break;
        }

        check = check.next;
      }
      while (second && second !== check && isReversable) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      if (!previousGroupTail) {
        head = first;
      } else {
        previousGroupTail.next = first;
      }
      top = check;
      if (isReversable) {
        previousTail.next = top;
        previousGroupTail = previousTail;
      }
    }
    return head;
  }
}
