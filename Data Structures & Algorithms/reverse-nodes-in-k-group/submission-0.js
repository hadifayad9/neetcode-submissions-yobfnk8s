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
    let top = head;
    let check = head;
    let previousGroupTail = null;
    let isLessThanK = false;
    let counter = 1;
    while (top !== null) {
      let first = top;
      let second = first.next;
      let prevTail = first;
      for (let i = 0; i < k; i++) {
        if (check === null) {
          isLessThanK = true;
          break;
        }
        check = check.next;
      }
      while (second !== check && !isLessThanK) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      if (counter === 1) {
        head = first;
      } else {
        previousGroupTail.next = first;
      }
      top = check;
      if (check !== null) {
        prevTail.next = top;
        previousGroupTail = prevTail;
      }
      if (check === null && !isLessThanK) {
        prevTail.next = null;
      }
      counter++;
    }
    return head;
  }
}
