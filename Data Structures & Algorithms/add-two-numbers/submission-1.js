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
    let addNumbersList = new ListNode();
    let addNumbersListTail = addNumbersList;
    let carry = 0;
    while (l1 || l2 || carry > 0) {
      let l1Val = l1 ? l1.val : 0;
      let l2Val = l2 ? l2.val : 0;

      let remainder = (l1Val + l2Val + carry) % 10;
      carry = Math.floor((l1Val + l2Val + carry) / 10);
      addNumbersListTail.next = new ListNode(remainder);

      addNumbersListTail = addNumbersListTail.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    return addNumbersList.next;
  }
}
