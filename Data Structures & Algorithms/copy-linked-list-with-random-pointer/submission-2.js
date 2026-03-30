// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
  copyRandomList(head) {
    let copyHead = head;
    let copyHeadTail = copyHead;
    let copyList = new Node(0);
    let copyListTail = copyList;
    let map = new Map();
    while (copyHeadTail) {
      copyListTail.next = new Node(copyHeadTail.val);
      map.set(copyHeadTail, copyListTail.next);
      copyListTail = copyListTail.next;
      copyHeadTail = copyHeadTail.next;
    }
    copyHeadTail = copyHead;
    copyListTail = copyList.next;
    while (copyHeadTail) {
      if (copyHeadTail.random) {
        copyListTail.random = map.get(copyHeadTail.random);
      } else {
        copyListTail.random = null;
      }
      copyListTail = copyListTail.next;
      copyHeadTail = copyHeadTail.next;
    }
    return copyList.next;
  }
}
