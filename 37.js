/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
  let posibilities = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // 初始化布阵
  let lines = [];
  let rows = [];
  let maps = [[[], [], []], [[], [], []], [[], [], []]];
  let blanks = [];

  board.forEach((line, lIndex) => {
      line.forEach((item, rIndex) => {
          lines[lIndex] = lines[lIndex] || [];
          rows[rIndex] = rows[rIndex] || [];
          if (item !== '.') {
              lines[lIndex].push(item);
              rows[rIndex].push(item);
              maps[Math.floor(lIndex / 3)][Math.floor(rIndex / 3)].push(item);
          } else {
              blanks.push([lIndex, rIndex]);
          }
      });
  })

  // 超时-原因是只判断了某个格子可以放什么，但是没有看某个数字只能放在某个格子里这种。。。
  while(blanks.length) {
      blanks.forEach((blank, bIndex) => {
          lines[blank[0]] = lines[blank[0]] || [];
          rows[blank[1]] = rows[blank[1]] || [];
          let notAvailableSet = new Set(lines[blank[0]].concat(rows[blank[1]]).concat(maps[Math.floor(blank[0] / 3)][Math.floor(blank[1] / 3)]));
          if (notAvailableSet.size === 8) {
              let posibility = posibilities.filter(item => {
                  return !notAvailableSet.has(item);
              });
              lines[blank[0]].push(posibility[0]);
              rows[blank[1]].push(posibility[0]);
              maps[Math.floor(blank[0] / 3)][Math.floor(blank[1] / 3)].push(posibility[0]);
              board[blank[0]][blank[1]] = posibility[0];
              blanks.splice(bIndex, 1);
          }
      });
  }

  return board;
};