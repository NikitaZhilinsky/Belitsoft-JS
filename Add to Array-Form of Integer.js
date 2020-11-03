/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let arrInNumber = Number(A.join(""))
    let resultNumber = arrInNumber + K
    let resultArr = Array.from(String(resultNumber), Number)

    return resultArr
};
