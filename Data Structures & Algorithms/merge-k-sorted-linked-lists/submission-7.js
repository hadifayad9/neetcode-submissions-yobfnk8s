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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
  mergeKLists(lists) {
    if (lists.length === 0) {
      return null;
    }
    while (lists.length > 1) {
      let result = [];
      for (let index = 0; index < lists.length; index += 2) {
        const l1 = lists[index];
        const l2 = index + 1 > lists.length ? null : lists[index + 1];

        result.push(this.mergeTwoLists(l1, l2));
      }
      lists = result;
    }
    return lists[0];
  }
    mergeTwoLists(l1, l2) {
    let dummyNode = new ListNode();
    let dummyTail = dummyNode;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        dummyTail.next = l1;
        l1 = l1.next;
      } else {
        dummyTail.next = l2;
        l2 = l2.next;
      }
      dummyTail = dummyTail.next;
    }
    dummyTail.next = l1 || l2;
    return dummyNode.next;
  }
}
