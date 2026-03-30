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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let check = head;
        let top = check;
        let previousGroupTail = null;
        while(top !== null){
            let first = top;
            let second = first.next;
            let previousTail = first;
            let isLessThanK = false;
            for(let i = 0; i < k; i++){
                if(check === null){
                    isLessThanK = true;
                    break;   
                }
                check = check.next;
            }
            while(second !== check && !isLessThanK){
                let temp = second.next;
                second.next = first;
                first = second;
                second = temp;
            }
            if(previousGroupTail === null){
                head = first;
            }else{
                previousGroupTail.next = first;
            }
            top = check;
            if(check !== null){
                previousTail.next = top;
                previousGroupTail = previousTail;
            }
            if(check === null && !isLessThanK){
                previousTail.next = null;
            }
        }
        return head;
    }
}
