/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = [];
    if (s.length === 0) {
        return -1;
    }
    for (i = 0; i < s.length; i++) {
      if (map[s[i]]) {
          map[s[i]] += 1;
      } else {
          map[s[i]] = 1;
      }
    }
    for (i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};


https://leetcode.com/problems/first-unique-character-in-a-string/submissions/

    /*
    let map = new Map();
    for (let i of s) {
      if (!map.has(s)) {
          map.set(i, 1);
      } else {
          map.set(i, map.get(i) + 1);
      }
    }
    return map;
    */
