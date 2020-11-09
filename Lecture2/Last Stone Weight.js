/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a,b) => a - b);
        let result = stones[stones.length - 1] - stones[stones.length - 2];
        stones.length = stones.length - 2;
        stones.push(result);
    }
    return stones;
};


https://leetcode.com/problems/last-stone-weight/
