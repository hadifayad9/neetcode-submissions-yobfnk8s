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
    let copyList = new Node(0);
    let copyTail = copyList;
    let map = new Map();
    while (copyHead) {
      copyTail.next = new Node(copyHead.val);
      map.set(copyHead, copyTail.next);
      copyHead = copyHead.next;
      copyTail = copyTail.next;
    }
    copyHead = head;
    copyTail = copyList.next;
    while (copyHead) {
      if (copyHead.random === null) {
        copyTail.random = null;
      } else {
        copyTail.random = map.get(copyHead.random);
      }
      copyHead = copyHead.next;
      copyTail = copyTail.next;
    }
    return copyList.next;
  }
}
