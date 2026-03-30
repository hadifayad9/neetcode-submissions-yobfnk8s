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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
  addTwoNumbers(l1, l2) { 
    let dummyNode = new ListNode();
    let dummyTail = dummyNode;
    let carry = 0;
    while (l1 || l2 || carry > 0) {
      let l1Value = l1 === null ? 0 : l1.val;
      let l2Value = l2 === null ? 0 : l2.val;
      let remainder = (l1Value + l2Value + carry) % 10;
      carry = Math.floor((l1Value + l2Value + carry) / 10);
      dummyTail.next = new ListNode(remainder);

      dummyTail = dummyTail.next;
      l1 = l1 === null ? null : l1.next;
      l2 = l2 === null ? null : l2.next;
    }
    return dummyNode.next;
  }
}
