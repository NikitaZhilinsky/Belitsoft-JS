/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = [];
    let arr3 = [];
    for (i = 0; i < arr2.length; i++) {
        for (j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                arr3.push(arr1[j]);
            }
        }
    }
    let arr4 = [];
    for (i = 0; i < arr1.length; i++) {
        if (!arr3.includes(arr1[i])) {
            arr4.push(arr1[i]);
        }
    }
    arr4.sort((a, b) => a - b);
    arr3.push(...arr4);
    return arr3;
};
