function getRow(grid, rowNumber) {
  return grid[rowNumber];
}

function getColumn(grid, columnNumber) {
  let newArray = [];
  for (let row of grid) {
    newArray.push(row[columnNumber]);
  }
  return newArray;
}

function getSection(grid, x, y) {
  let newArray = [];
  for (let i = y * 3; i < y * 3 + 3; i++) {
    for (let j = x * 3; j < x * 3 + 3; j++) {
      newArray.push(grid[i][j]);
    }
  }
  return newArray;
}

function includes1to9(array) {
  let map = {};
  for (let item of array) {
    map[item] = true;
  }
  if (Object.keys(map).length === 9) {
    return true;
  } else {
    return false;
  }
}

function sudokuIsValid(puzzle) {
  let isValid = true;
  for (let i = 0; i < 9; i++) {
    if (!includes1to9(getRow(puzzle, i))) {
      isValid = false;
    }
    if (!includes1to9(getColumn(puzzle, i))) {
      isValid = false;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!includes1to9(getSection(puzzle, i, j))) {
        isValid = false;
      }
    }
  }
  return isValid;
}
