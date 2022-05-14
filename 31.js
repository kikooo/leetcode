/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
  let transformed = 0;
  let length = nums.length;
  for(let i = length - 1; i > 0; i --) {
      if (nums[i - 1] < nums[i]) {
          // find & switch
          for(let j = length - 1; j > 0; j --) {
              if (nums[j] > nums[i - 1]) {
                  let temp = nums[j]
                  nums[j] = nums[i - 1];
                  nums[i - 1] = temp;
                  break;
              }
          }
          // rotate left
          for(let k = i; k < (length - 1 + i) / 2; k ++) {
              let temp = nums[k];
              let rindex = length - 1 + i - k;
              nums[k] = nums[rindex];
              nums[rindex] = temp;
          }
          transformed = 1;
          break;
      }
  }
  if (!transformed) {
      // rotate all
      for(let i = 0; i < length / 2 ; i ++) {
          let temp = nums[i];
          let rindex = length - i - 1;
          nums[i] = nums[rindex];
          nums[rindex] = temp;
      }
  }
};