/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let set = new Set(J);
    let result = 0;
    for (i = 0; i < S.length; i++) {
        if (set.has(S[i])) {
            result += 1;
        }
    }
    return result;
};


https://leetcode.com/problems/jewels-and-stones/submissions/
