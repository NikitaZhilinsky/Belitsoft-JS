/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    A.sort((a, b) => a - b);
    for (i = 0; i < A.length; i++) {
        if (A[i] === A[i + 1]) {
            return A[i];
        }
    }
};


https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/
