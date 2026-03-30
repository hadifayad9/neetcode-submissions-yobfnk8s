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
    if (!head || !head.next) {
      return null;
    }
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let reversedHalfFirst = slow.next;
    let reversedHalfTail = reversedHalfFirst;
    let reversedSecondHalf = reversedHalfFirst.next;
    slow.next = null;
    let firstHalf = head;
    while (reversedSecondHalf) {
      let temp = reversedSecondHalf.next;
      reversedSecondHalf.next = reversedHalfFirst;
      reversedHalfFirst = reversedSecondHalf;
      reversedSecondHalf = temp;
    }
    reversedHalfTail.next = null;
    while (firstHalf && firstHalf.next && reversedHalfFirst) {
      let firstHalfTemp = firstHalf.next;
      let secondHalfTemp = reversedHalfFirst.next;
      firstHalf.next = reversedHalfFirst;
      if (firstHalfTemp) {
        reversedHalfFirst.next = firstHalfTemp;
      }
      firstHalf = firstHalfTemp;
      reversedHalfFirst = secondHalfTemp;
    }
    return head;
  }
}
