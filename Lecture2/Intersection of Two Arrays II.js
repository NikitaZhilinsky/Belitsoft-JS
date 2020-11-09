/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = [];
    let result = [];
    for (i = 0; i < nums1.length; i++) {
      if (map[nums1[i]]) {
          map[nums1[i]] += 1;
      } else {
          map[nums1[i]] = 1;
      }
    }
    for (i = 0; i < nums2.length; i++) {
      if (map[nums2[i]]) {
          result.push(nums2[i]);
          map[nums2[i]] -= 1;
      }
    }
    return result;
};


https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/

    /*
    let map = new Map();
    for (i = 0; i < nums2.length; i++) {
      if (map[nums2[i]]) {
          map.set(nums2[i], map[nums2[i]] + 1);
      } else {
          map.set(nums2[i], 1);
      }
    }
    */
