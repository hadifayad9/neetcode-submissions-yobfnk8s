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
    if(!head || !head.next){
        return null;
    }
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    let reversedHalf = slow.next;
    slow.next = null;
    let firstHalf = head;
    let reversedHalfTail = reversedHalf;
    let reversedHalfFirst = reversedHalf;
    let reversedHalfSecond = reversedHalfFirst.next;

    while (reversedHalfSecond) {
      let temp = reversedHalfSecond.next;
      reversedHalfSecond.next = reversedHalfFirst;
      reversedHalfFirst = reversedHalfSecond;
      reversedHalfSecond = temp;
    }
    reversedHalfTail.next = null;
    reversedHalf = reversedHalfFirst;
    while (firstHalf && firstHalf.next && reversedHalf) {
      let firstHalfTemp = firstHalf.next;
      let reversedHalfTemp = reversedHalf.next;
      firstHalf.next = reversedHalf;
      if (firstHalfTemp) {
        reversedHalf.next = firstHalfTemp;
      }
      reversedHalf = reversedHalfTemp;
      firstHalf = firstHalfTemp;
    }
    return head;
  }
}
