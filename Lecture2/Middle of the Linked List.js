/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arr = [];
    while(head) {
        arr.push(head);
        head = head.next;
    }

    return arr[Math.floor(arr.length/2)];
};


https://leetcode.com/problems/middle-of-the-linked-list/
