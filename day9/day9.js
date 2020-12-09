const data = require('fs').readFileSync('input.txt', 'utf-8').split('\n').map(x => +x);
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').split('\n').map(x => +x);

const preambleLength = 25

// console.log(testData)

const encodingError = (data) => {
  for (let i = preambleLength; i < data.length; i++) {
    const num = data.slice(i)[0]
    const result = data.slice(i - preambleLength, i).map((x, i, arr) => arr.includes(num - x))
    if(result.every(x => !x)) {
      return `Here is the answer ${data.slice(i)[0]}`
    }
  }
}

console.log(encodingError(data))