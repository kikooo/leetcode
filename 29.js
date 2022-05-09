/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// 进度暂存：答案错了。-2147483648除-1，预期结果2147483647
 var divide = function(dividend, divisor) {
  let index = 0;
  let absoluteDividend = dividend >= 0 ? dividend : -dividend;
  let absoluteDivisor = divisor > 0 ? divisor : -divisor;
  while(absoluteDividend >= absoluteDivisor) {
      absoluteDividend = absoluteDividend - absoluteDivisor;
      index += 1;
  }
  return ((dividend >= 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? index : -index;
};