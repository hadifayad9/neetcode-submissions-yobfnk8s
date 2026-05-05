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
    let top = head;
    let check = top;
    let previousTailGroup = null;
    while (top) {
      let isReversable = true;
      for (let i = 0; i < k; i++) {
        if (!check) {
          isReversable = false;
          break;
        }
        check = check.next;
      }
      let first = top;
      let previousTail = first;
      let second = first.next;
      while (second && second !== check && isReversable) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      if (!previousTailGroup) {
        head = first;
      } else {
        previousTailGroup.next = first;
      }
      top = check;
      if (isReversable) {
        previousTail.next = top;
        previousTailGroup = previousTail;
      }
    }
    return head;
  }
}
