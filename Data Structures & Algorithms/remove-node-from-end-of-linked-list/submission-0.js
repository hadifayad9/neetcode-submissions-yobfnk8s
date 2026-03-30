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
    let lengthList = head;
    let length = 0;
    while (lengthList) {
      lengthList = lengthList.next;
      length++;
    }
    if (length === n) {
      head = head.next;
      return head;
    }
    let removeNthNode = head;
    for (let i = 0; i < length - n - 1; i++) {
      removeNthNode = removeNthNode.next;
    }
    removeNthNode.next = removeNthNode.next.next;
    return head;
  }
}
