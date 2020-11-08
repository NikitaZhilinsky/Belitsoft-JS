/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sResult = s.split("").sort().join("");
    let tResult = t.split("").sort().join("");
    return sResult === tResult;
};


https://leetcode.com/problems/valid-anagram/submissions/
