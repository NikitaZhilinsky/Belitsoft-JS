/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    maxdiff = 0;
    for (i = 0; i < prices.length; i++) {
        for (j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > maxdiff) {
                maxdiff = prices[j] - prices[i];
            }
        }
    }
    return maxdiff;
};
