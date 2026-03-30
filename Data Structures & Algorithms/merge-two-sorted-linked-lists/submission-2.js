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
    let dummyNodeTail = dummyNode;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        dummyNodeTail.next = list1;
        list1 = list1.next;
      } else {
        dummyNodeTail.next = list2;
        list2 = list2.next;
      }
      dummyNodeTail = dummyNodeTail.next;
    }
    dummyNodeTail.next = list1 || list2;
    return dummyNode.next;
  }
}
