/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let lines = [];
  let rows = [];
  let maps = [[[], [], []], [[], [], []], [[], [], []]];
  board.forEach((line, lIndex) => {
      line.forEach((item, rIndex) => {
          lines[lIndex] = lines[lIndex] || [];
          rows[rIndex] = rows[rIndex] || [];
          if (item !== '.') {
              lines[lIndex].push(item);
              rows[rIndex].push(item);
              maps[Math.floor(lIndex / 3)][Math.floor(rIndex / 3)].push(item);
          }
      });
  })

  let isAvailable = true;

  lines.forEach(line => {
      let setter = new Set(line);
      if (setter.size !== line.length) isAvailable = false;
  })

  if (!isAvailable) return isAvailable;

  rows.forEach(row => {
      let setter = new Set(row);
      if (setter.size !== row.length) isAvailable = false;
  })

  if (!isAvailable) return isAvailable;

  maps.forEach(mapLine => {
      mapLine.forEach(mapItem => {
          let setter = new Set(mapItem);
          if (setter.size !== mapItem.length) isAvailable = false;
      })
  })

  return isAvailable;
};