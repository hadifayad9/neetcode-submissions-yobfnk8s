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
      let mergedLists = [];
      for (let i = 0; i < lists.length; i += 2) {
        let l1 = lists[i];
        let l2 = i + 1 < lists.length ? lists[i + 1] : null;
        mergedLists.push(this.mergeTwoLists(l1, l2));
      }
      lists = mergedLists;
    }
    return lists[0];
  }
  mergeTwoLists(list1, list2) {
    let dummyList = new ListNode();
    let dummyListTail = dummyList;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        dummyListTail.next = list1;
        list1 = list1.next;
      } else {
        dummyListTail.next = list2;
        list2 = list2.next;
      }
      dummyListTail = dummyListTail.next;
    }
    dummyListTail.next = list1 || list2;
    return dummyList.next;
  }
}
