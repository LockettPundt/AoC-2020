const data = require('fs').readFileSync('input.txt', 'utf-8').split('\n');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').split('\n')

const binaryBoarding = (passes) => {
  return Math.max(...passes.map(x => {
    const range = x.split('').reduce((obj, letter) => {
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
    return range.row.upper * 8 + range.column.upper
  })
  )
}

console.log(binaryBoarding(data))