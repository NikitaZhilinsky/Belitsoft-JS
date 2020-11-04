/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (i = 0; i < matrix.length; i++) {
        for (j = i + 1; j < matrix.length; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < (matrix[i].length)/2; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[i].length - 1 -j];
            matrix[i][matrix[i].length - 1 -j] = tmp;
        }
    }
};
