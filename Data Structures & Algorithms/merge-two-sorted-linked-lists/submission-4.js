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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
    let dummyNode = new ListNode();
    let dummyTail = dummyNode;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        dummyTail.next = list1;
        list1 = list1.next;
      } else {
        dummyTail.next = list2;
        list2 = list2.next;
      }
      dummyTail = dummyTail.next;
    }
    dummyTail.next = list1 || list2;
    return dummyNode.next;
  }
}
