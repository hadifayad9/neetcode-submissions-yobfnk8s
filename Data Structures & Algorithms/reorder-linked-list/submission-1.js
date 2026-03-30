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
          if (!head.next || !head.next.next) {
      return head;
    }
    let slow = head;
    let fast = head;
    while (fast && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let secondHalfFirst = slow.next;
    let secondHalfSecond = secondHalfFirst.next;
    let secondHalfHead = slow.next;
    slow.next = null;
    let firstHalf = head;
    while (secondHalfSecond) {
      let temp = secondHalfSecond.next;
      secondHalfSecond.next = secondHalfFirst;
      secondHalfFirst = secondHalfSecond;
      secondHalfSecond = temp;
    }
    secondHalfHead.next = null;
    while (firstHalf && firstHalf.next !== null && secondHalfFirst) {
      let firstHalfTemp = firstHalf.next;
      let secondHalfFirstTemp = secondHalfFirst.next;
      firstHalf.next = secondHalfFirst;
      if (firstHalfTemp) {
        secondHalfFirst.next = firstHalfTemp;
      }
      firstHalf = firstHalfTemp;
      secondHalfFirst = secondHalfFirstTemp;
    }
    return head;
    }
}
