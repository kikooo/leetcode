/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if (!(needle && needle.length)) return 0;

  let needleIndex = 0;
  for(let index = 0; index <= haystack.length; index++) {
      if (needleIndex === needle.length) {
          return index - needleIndex;
      }
      if(index == haystack.length) {
          return -1;
      }
      if (haystack[index] === needle[needleIndex]) {
          needleIndex += 1;
      } else {
          index = index - needleIndex;
          needleIndex = 0;
      }
  }
  return -1;
};