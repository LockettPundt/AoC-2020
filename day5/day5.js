const data = require('fs').readFileSync('input.txt', 'utf-8').split('\n');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').split('\n')

// part one...
const binaryBoarding = (passes) => {
  return Math.max(...passes.map(x => {
    const { row, column } = x.split('').reduce((obj, letter) => {
      switch (letter) {
        case 'F':
          obj.row.upper = Math.floor((obj.row.upper + obj.row.lower) / 2)
          break
        case 'B':
          obj.row.lower = Math.ceil((obj.row.upper + obj.row.lower) / 2)
          break
        case 'L':
          obj.column.upper = Math.floor((obj.column.upper + obj.column.lower) / 2)
          break
        case 'R':
          obj.column.lower = Math.floor((obj.column.upper + obj.column.lower) / 2)
          break
      }
      return obj
    }, {
      row: {
        lower: 0,
        upper: 127,
      },
      column: {
        lower: 0,
        upper: 7,
      }
    })
    return row.upper * 8 + column.upper
  })
  )
}

// part two...
const binaryBoardingTwo = (passes) => {
  const [mySeat,] = passes.map(x => {
    const { row, column } = x.split('').reduce((obj, letter) => {
      switch (letter) {
        case 'F':
          obj.row.upper = Math.floor((obj.row.upper + obj.row.lower) / 2)
          break
        case 'B':
          obj.row.lower = Math.ceil((obj.row.upper + obj.row.lower) / 2)
          break
        case 'L':
          obj.column.upper = Math.floor((obj.column.upper + obj.column.lower) / 2)
          break
        case 'R':
          obj.column.lower = Math.floor((obj.column.upper + obj.column.lower) / 2)
          break
      }
      return obj
    }, {
      row: {
        lower: 0,
        upper: 127,
      },
      column: {
        lower: 0,
        upper: 7,
      }
    })
    return row.upper * 8 + column.upper
  })
  .sort((a, b) => a - b)
  .filter((x, i, arr) => +arr[i + 1] !== +x + 1)
  return mySeat
}

console.log(JSON.stringify(binaryBoardingTwo(data), null, 1))
