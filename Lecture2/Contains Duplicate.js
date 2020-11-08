/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(nums);
    if (set.size === nums.length) {
        return false;
    } else {
        return true;
    }
};


https://leetcode.com/problems/contains-duplicate/submissions/
