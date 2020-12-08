const data = require('fs').readFileSync('input.txt', 'utf-8').split('\n');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').split('\n');

const infiniteProgram = (data) => {
  let indexes = []
  let acc = 0
  for (let i = 0;;) {
    if (indexes.includes(i)) {
      break
    }
    const [action, value] = data[i].split(' ')
    indexes.push(i)
    switch (action) {
      case 'nop':
        i++
        break
      case 'acc':
        acc += +value
        i++
        break
      case 'jmp':
        i += +value
        break
    }
  }
  return `the acc is ${acc}`
} 

console.log(infiniteProgram(data))