const data = require('fs').readFileSync('input.txt', 'utf-8').split('\n').map(x => +x);
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').split('\n').map(x => +x);

const preambleLength = 25

const encodingError = (data) => {
  let weakness
  for (let i = preambleLength; i < data.length; i++) {
    const num = data.slice(i)[0]
    const results = data.slice(i - preambleLength, i).map((x, i, arr) => arr.includes(num - x))
    if(!results.includes(true)) {
      weakness = data.slice(i)[0]
    }
  }
  for (let i = 0; i < data.length; i++) {
    const range = data.slice(i)
    for(let j = range.length - 1; j >= 0; j--) {
      const current = range.slice(0, j)
      const sum = current.reduce((sum, x) => sum += x, 0)
      if (sum === weakness) {
        return Math.min(...current) + Math.max(...current)
      }
    }
  }
}

console.log(encodingError(data))