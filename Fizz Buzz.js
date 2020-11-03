/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    for (i = 0; i <= n - 1; i++) {
        result[i] = "" + (i + 1);
        let k = i + 1;

        if ((k % 3 === 0) && (k % 5 === 0)) {
            result[i] = "FizzBuzz";
        } else if (k % 3 === 0) {
        result[i] = "Fizz";
        } else if (k % 5 === 0) {
            result[i] = "Buzz";
        }
    }

    return result;
};
