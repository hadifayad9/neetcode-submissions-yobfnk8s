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
    if (lists === null || lists.length === 0) {
      return null;
    }
    while (lists.length > 1) {
      let mergedList = [];
      for (let i = 0; i < lists.length; i += 2) {
        let list1 = lists[i];
        let list2 = i + 1 > lists.length ? null : lists[i + 1];
        mergedList.push(this.mergeTwoLists(list1, list2));
      }
      lists = mergedList;
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
