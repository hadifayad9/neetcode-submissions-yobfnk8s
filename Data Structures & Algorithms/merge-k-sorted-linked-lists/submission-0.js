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
    let dummyList = new ListNode();
    let dummyListTail = dummyList;
    let k = lists.length;
    while (true) {
      let minIndex = -1;
      for (let i = 0; i < k; i++) {
        if (lists[i] === null) {
          continue;
        }
        if (minIndex === -1 || lists[i].val < lists[minIndex].val) {
          minIndex = i;
        }
      }
      if (minIndex === -1) {
        break;
      }
      dummyListTail.next = lists[minIndex];
      dummyListTail = dummyListTail.next;
      lists[minIndex] = lists[minIndex].next;
    }
    return dummyList.next;
  }
}
