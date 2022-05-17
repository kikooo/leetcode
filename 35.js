/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let length = nums.length;
  let start = 0;
  let end = length - 1;

  if (end < start) {
      return -1;
  }

  let check = (index) => {
      if (nums[index] === target) return index;
      if (index === 0 && nums[index] > target) return 0;
      if (index === length - 1 && nums[index] < target) return length;
      if (index > 0 && nums[index - 1] < target && nums[index] > target) return index;
      return -1;
  }

  while(start < end) {
      let temp = Math.floor((start + end) / 2);

      if (check(start) >= 0) return check(start);
      if (check(temp) >= 0) return check(temp);
      if (check(end) >= 0) return check(end);

      if (nums[start] < target && nums[temp] > target) {
          end = temp - 1;
          start = start + 1;
      } else {
          end = end - 1;
          start = temp + 1;
      }

  }



  return check(start);

};