/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  // 找k的话会消耗一遍轮询，还不如直接从头找到尾，不太合理。。
  // 二分法呢？
  let length = nums.length;
  if (length === 0) {
      return -1;
  }

  let i = 0;
  let j = length - 1;

  while(i < j) {
      let temp = Math.floor((j + i) / 2);
      if (nums[i] === target) return i;
      if (nums[j] === target) return j;
      if (nums[temp] === target) return temp;

      if (nums[i] < nums[temp]) {
          // 没转
          if (nums[i] < target && target < nums[temp]) {
              i = i + 1;
              j = temp - 1;
          } else {
              i = temp + 1;
              j = j - 1;
          }
      } else {
          // 转了
          if (nums[i] < target || nums[temp] > target) {
              i = i + 1;
              j = temp - 1;
          } else {
              i = temp + 1;
              j = j - 1;
          }
      }
  }

  return (i === j && nums[i] === target) ? i : -1;
};