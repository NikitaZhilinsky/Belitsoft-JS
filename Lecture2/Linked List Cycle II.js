/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let tmp = head;
    let arr = [];
    let value = [];
    while(tmp) {
        arr.push(tmp);
        tmp = tmp.next;
    }
    for (i = 0; i < arr.length; i++) {
        if (value.includes(arr[i].val)) {
            return arr[i];
        } else {
            value.push(arr[i].val);
        }
    }
    return head;
};

/*Not Work*/


https://leetcode.com/problems/linked-list-cycle-ii/
