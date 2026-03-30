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
    let copyTail = copyHead;
    let deepCopy = new Node(0);
    let deepCopyTail = deepCopy;
    let map = new Map();
    while (copyTail) {
      deepCopyTail.next = new Node(copyTail.val);
      map.set(copyTail, deepCopyTail.next);
      copyTail = copyTail.next;
      deepCopyTail = deepCopyTail.next;
    }
    copyTail = copyHead;
    deepCopyTail = deepCopy.next;
    while (copyTail) {
      if (copyTail.random) {
        deepCopyTail.random = map.get(copyTail.random);
      } else {
        deepCopyTail.random = null;
      }
      copyTail = copyTail.next;
      deepCopyTail = deepCopyTail.next;
    }
    return deepCopy.next;
  }
}
