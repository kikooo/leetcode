// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number[]}
//  */
//  var findSubstring = function(s, words) {
//   let wordsLength = words.length;

//   // 尝试思路：构造一个可能的序列，然后逐个查找。

//   // 构造序列循环太多了？递归。。全排列算法：https://blog.csdn.net/qq_32682301/article/details/108361463
//   let res = [];

//   let arrange = (tempArr, leftArr) => {
//       if (tempArr.length === wordsLength) {
//           let index = 0;
//           let item = tempArr.join('');
//           let tempS = s;
//           let firstIndex = tempS.indexOf(item);
//           while(firstIndex >= 0) {
//               res.push(index + firstIndex);
//               index = index + firstIndex + 1;
//               tempS = tempS.slice(firstIndex + 1);
//               firstIndex = tempS.indexOf(item);
//           }
//       } else {
//           leftArr.forEach((item, index) => {
//               let temp = [...leftArr];
//               temp.splice(index, 1);
//               arrange(tempArr.concat(item), temp);
//           })
//       }
//   }
//   arrange([], words);

//   return res;
// };


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
  let gap = words[0].length;

  let res = [];

  let checkedWord = [];

  words.forEach((item, index) =>{
      if(checkedWord.indexOf(item) < 0) {
          checkedWord.push(item);
          let tempS = s;
          let i = tempS.indexOf(item);
          let start = 0;
          while(i >= 0) {
              // 找到之后就开始顺着删除数组。
              let a = i;
              let tempWords = [...words];
              tempWords.splice(index, 1);
              while (tempWords.length) {
                  a = a + gap;
                  if ((a + (gap * tempWords.length)) > tempS.length) {
                      break;
                  }
                  let targetStr = tempS.slice(a, a + gap);
                  let find = tempWords.indexOf(targetStr);

                  if (find >= 0) {
                      tempWords.splice(find, 1);
                  } else {
                      break;
                  }

              }
              if (!tempWords.length) {
                  res.push(i + start);
              }

              // 一个i处理完开始找下一个。
              start = start + i + 1;
              tempS = tempS.slice(i + 1);
              i = tempS.indexOf(item);
          }
      }
  });

  return res;
};