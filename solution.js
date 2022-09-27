let grid = [
  [false, true, false, false],
  [false, false, true, false],
  [false, false, false, false],
  [false, false, false, true]
];

function flip(arr) {
  let newArr = [];
  let rows = [];
  let cols = [];

  for(let rowIndex = 0; rowIndex <= arr.length - 1; rowIndex++) {
    newArr[rowIndex] = [];
    for(let colIndex = 0; colIndex <= arr[rowIndex].length - 1; colIndex++) {
      newArr[rowIndex][colIndex] = false;
      if(arr[rowIndex][colIndex] === true) {
        rows.push(rowIndex);
        cols.push(colIndex);    
      }
    }
  }

  for(let newRowIndex = 0; newRowIndex <= newArr.length - 1; newRowIndex++) {
    for(let newColIndex = 0; newColIndex <= newArr[newRowIndex].length - 1; newColIndex++) {
      if(rows.includes(newRowIndex) || cols.includes(newColIndex)) {
        newArr[newRowIndex][newColIndex] = true;
      }
    }
  }

  return newArr;
}

console.log(flip(grid));
