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
     * @return {void}
     */
  reorderList(head) {
    if (!head || !head.next || !head.next.next) {
      return head;
    }
    let fast = head;
    let slow = fast;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    let secondHalf = slow.next;
    let secondHalfSecond = secondHalf.next;
    let secondHalfSecondTail = secondHalf;
    slow.next = null;
    let firstHalf = head;
    while (secondHalfSecond) {
      let temp = secondHalfSecond.next;
      secondHalfSecond.next = secondHalf;
      secondHalf = secondHalfSecond;
      secondHalfSecond = temp;
    }
    secondHalfSecondTail.next = null;

    while (firstHalf && firstHalf.next && secondHalf) {
      let firstHalfTemp = firstHalf.next;
      let secondHalfTemp = secondHalf.next;
      if (firstHalfTemp) {
        firstHalf.next = secondHalf;
      }
      secondHalf.next = firstHalfTemp;

      firstHalf = firstHalfTemp;
      secondHalf = secondHalfTemp;
    }
    return head;
  }
}
