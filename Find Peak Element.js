/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for (i = 0; i < nums.length; i++) {
        if ((nums[i] > nums[i - 1]) && (nums[i] > nums[i + 1])) {
            return i;
        } else if (nums[nums.length - 1] > nums[nums.length - 2]) {
            return nums.length - 1;
        }
    }
    return 0;
};
