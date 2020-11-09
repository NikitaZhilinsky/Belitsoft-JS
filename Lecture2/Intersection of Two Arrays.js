/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = [];
    for (i = 0; i < nums2.length; i++) {
        if (set1.has(nums2[i])) {
            result.push(nums2[i]);
            set1.delete(nums2[i]);
        }
    }
    return result;
};


https://leetcode.com/problems/intersection-of-two-arrays/submissions/

    /*
    var intersection = function(nums1, nums2) {
    let map = [];
    let result = [];
    for (i = 0; i < nums1.length; i++) {
      map[nums1[i]] = 1;
    }
    for (i = 0; i < nums2.length; i++) {
      if (map[nums2[i]]) {
          result.push(nums2[i]);
          map[nums2[i]] -= 1;
      }
    }
    return result;
    };
    */
