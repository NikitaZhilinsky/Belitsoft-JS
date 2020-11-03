/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maj = nums[0];
    let count = 1;
    for (i = 1; i < nums.length; i++) {
        if (count === 0) {
            maj = nums[i];
            count = 1;
        } else if (maj === nums[i]) {
            count += 1;
        } else {
            count -= 1;
        }
    }
    return maj;
};
