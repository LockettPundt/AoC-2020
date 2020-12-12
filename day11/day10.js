const data = require('fs').readFileSync('input.txt', 'utf-8').replace(/[L]/g, '#').split('\n')
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').replace(/[L]/g, '#').split('\n')

const seatingSystem = (data) => {
  let result = [...data]
  for (;;) {
    let temp = result.map((line, i) => {
      return line.split('').map((x, index) => {
        const occupiedSeats = [
          result[i - 1] && result[i - 1][index - 1] === '#',
          result[i - 1] && result[i - 1][index] === '#',
          result[i - 1] && result[i - 1][index + 1] === '#',
          result[i][index - 1] === '#',
          result[i][index + 1] === '#',
          result[i + 1] && result[i + 1][index - 1] === '#',
          result[i + 1] && result[i + 1][index] === '#',
          result[i + 1] && result[i + 1][index + 1] === '#',
        ].filter(bool => !!bool)
        if (occupiedSeats.length >= 4 && x === '#') {
          return 'L'
        } else if (x === 'L' && !occupiedSeats.length) {
          return '#'
        }
        return x
      }).join('')
    })
    if (temp.every((x, i) => x === result[i])) {
      break
    } else {
      result = temp
    }
  }
  return result.reduce((sum, x) => sum += x.split('').filter(seat => seat === '#').length, 0)
}

console.log(seatingSystem(data))