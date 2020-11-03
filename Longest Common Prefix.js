/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";
    if (strs.length === 0) {
        return result;
    }
    for (i = 0; i < strs[0].length; i++) {
        let firstPref = strs[0][i];
        for (j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstPref) {
                return result;
            }
        }
        result += firstPref;
    }
    return result;
};
