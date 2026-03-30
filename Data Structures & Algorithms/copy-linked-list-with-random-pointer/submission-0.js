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
    let copyDeepList = new Node(0);
    let copyDeepListTail = copyDeepList;
    let map = new Map();

    while (copyHead) {
      copyDeepListTail.next = new Node(copyHead.val);
      map.set(copyHead, copyDeepListTail.next);
      copyDeepListTail = copyDeepListTail.next;
      copyHead = copyHead.next;
    }
    copyHead = head;
    copyDeepListTail = copyDeepList.next;
    while (copyHead) {
      if (copyHead.random === null) {
        copyDeepListTail.random = null;
      } else {
        copyDeepListTail.random = map.get(copyHead.random);
      }
      copyHead = copyHead.next;
      copyDeepListTail = copyDeepListTail.next;
    }
    return copyDeepList.next;
  }
}
