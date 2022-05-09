/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 1;
  while(index < nums.length) {
      if (nums[index] === nums[index - 1]) {
          nums.splice(index, 1);
      } else {
          index ++;
      }
  }
  return nums.length;
};