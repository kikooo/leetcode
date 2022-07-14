/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
  if (n <= 0) {
      return '';
  }
  let str = '1';
  let count = n - 1;
  while (count > 0) {
      // 描述str
      let tempStr = str;
      str = '';
      let temp = tempStr[0];
      let tempCount = 1;
      while(tempStr.length) {
          tempStr = tempStr.slice(1);
          if (tempStr[0] === temp) {
              tempCount += 1;
          } else {
              str += `${tempCount}${temp}`;
              temp = tempStr[0];
              tempCount = 1;
          }
      }
      // console.log(str);
      count -= 1;
  }
  return str;
};