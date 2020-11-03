/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result = 0;
    for (i = (s.length - 1); i >= 0; i--) {

        if (s === "") {
            return 0;
        } else if (s[i] !== " ") {
            result += 1;
        } else if ((s[i] === " ") && (result !== 0)){
            break;
        }
    }

    return result;
};
