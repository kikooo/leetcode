/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  // 二分法
  let i = 0;
  let j = nums.length - 1;

  let start = -1;
  let mid = -1;
  let end = -1;

  if (j < 0) {
      return [start, end];
  }

  while(i < j) {
      let temp = Math.floor((i + j) / 2);
      if (nums[temp] < target) {
          i = temp + 1;
      } else if (nums[temp] > target) {
          j = temp - 1;
      } else {
          mid = temp;
          break;
      }
  }
  if(i === j && mid < 0) {
      mid = i;
  }

  for (let index = mid; index >= i; index-- ) {
      if (nums[index] === target) {
          start = index;
      } else {
          break;
      }
  }

  for (let index = mid; index <= j; index++ ) {
      if (nums[index] === target) {
          end = index;
      } else {
          break;
      }
  }

  return [start, end];
};