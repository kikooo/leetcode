/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  let stack = [];
  let i = 0;

  while(i < s.length) {
      let item = s.slice(i, i + 1);
      if (item === '(') {
          stack.push(i + item);
      } else {
          let stackItem = stack.pop();
          if (typeof(stackItem) == 'undefined') {
              stack.push(i + item);
          } else if (stackItem[stackItem.length - 1] === ')') {
              stack.push(stackItem);
              stack.push(i + item);
          }
      }
      i ++;
  }

  if (!stack.length) {
      return s.length;
  }

  let start = -1;
  let res = 0;
  let sliceIndex = Number(stack.shift().slice(0, -1));
  let stop = 0;
  while(!stop) {
      let count = sliceIndex - start - 1;
      start = sliceIndex;
      res = Math.max(res, count);
      let temp = stack.shift();
      if (temp) {
          sliceIndex = Number(temp.slice(0, -1));
      } else {
          stop = 1;
      }
  }

  let count = s.length - 1 - sliceIndex;

  res = Math.max(res, count);

  return res;
};