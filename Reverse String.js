/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(i = 0; i < (s.length - 1)/2; i++) {
        tmp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = tmp;
    }
};
