/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let B = [];
    for (i = 0; i < A.length; i++) {
        B[i] = A[i] ** 2;  
    }
    return B.sort((a, b) => a - b);
};

/*
var sortedSquares = function(A) {
    let B = [];
    for (i = 0; i < A.length; i++) {
        B[i] = A[i] ** 2;
        for (j = B.length - 1; j > 0; j--) {
            for (i = 0; i < j; i++) {
                if (B[i] < B[i + 1]) {
                    let tmp = B[i];
                    B[i] = B[i + 1];
                    B[i + 1] = tmp;
                }
            }
        }
    }
    return B;
};
*/
