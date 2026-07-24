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
    if (!head) {
      return null;
    }
    let stopReverse = head;
    let mainHead = head;
    let prevGroupTail = null;
    while (mainHead) {
      let first = mainHead;
      let second = first.next;
      let tail = first;
      let isReversable = true;
      for (let i = 0; i < k; i++) {
        if (!stopReverse) {
          isReversable = false;
          break;
        }
        stopReverse = stopReverse.next;
      }
      while (second && second !== stopReverse && isReversable) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      if (isReversable) tail.next = stopReverse;
      mainHead = stopReverse;
      if (!prevGroupTail) {
        head = first;
      } else {
        prevGroupTail.next = first;
      }
      prevGroupTail = tail;
    }
    return head;
  }
}
