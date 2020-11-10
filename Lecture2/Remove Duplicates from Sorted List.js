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

var deleteDuplicates = function(head) {
    if (head === null) {
        return head;
    }
    let tmp = head;
    while(tmp.next) {
        if (tmp.val === tmp.next.val) {
            tmp.next = tmp.next.next;
        } else {
            tmp = tmp.next;
        }
    }
    return head;
};


https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/



/*
var deleteDuplicates = function(head) {
    let arr = [];
    let tmp = head;
    while(tmp) {
        arr.push(tmp);
        tmp = tmp.next;
    }
    for (i = 0; i < arr.length; i++) {
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i].val === arr[j].val) {
                arr.splice(i, 1);
            }
        }
    }
    return arr[0]
};
 from Array to Linked List???*/
