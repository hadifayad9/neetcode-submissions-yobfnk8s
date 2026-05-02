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
    let tail = head;
    let copyList = new Node(0);
    let copyListTail = copyList;
    let map = new Map();
    while(tail){
      copyListTail.next = new Node(tail.val);
      map.set(tail, copyListTail.next);
      tail = tail.next;
      copyListTail = copyListTail.next;
    }
    tail = head;
    copyListTail = copyList.next;
    while(tail){
      if(tail.random){
        copyListTail.random = map.get(tail.random);
      }else{
        copyListTail.random = null;
      }
      tail = tail.next;
      copyListTail = copyListTail.next;
    }
    return copyList.next;
  }
}
