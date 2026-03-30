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
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let reversedHalf = slow.next;
    let reversedHalfEndValue = slow.next;
    let reversedHalfSecond = reversedHalf.next;
    slow.next = null;
    let firstHalf = head;
    while (reversedHalf && reversedHalfSecond) {
      let temp = reversedHalfSecond.next;
      reversedHalfSecond.next = reversedHalf;
      reversedHalf = reversedHalfSecond;
      reversedHalfSecond = temp;
    }
    reversedHalfEndValue.next = null;
    while (firstHalf && firstHalf.next && reversedHalf) {
      let firstHalfTemp = firstHalf.next;
      let secondHalfTemp = reversedHalf.next;

      firstHalf.next = reversedHalf;
      if (firstHalfTemp) {
        reversedHalf.next = firstHalfTemp;
      }
      firstHalf = firstHalfTemp;
      reversedHalf = secondHalfTemp;
    }
    return head;
    }
}
