const data = require('fs').readFileSync('input.txt', 'utf-8').split('\n');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').split('\n');

// part one...
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

//console.log(infiniteProgram(data))

// part two...
const infiniteProgramTwo = (data) => {
  let replaceIndexes = [...data].map(x => x.split(' ')[0] === 'jmp' || x.split(' ')[0] === 'nop')
  let indexes = []
  let acc = 0
  for (let j = 0; j < replaceIndexes.length; j++) {
    if (replaceIndexes[j]) {
      for (let i = 0;;) {
        if (i === data.length) {
          return `the acc is ${acc}`
        }
        if (indexes.includes(i)) {
          break
        }
        let [action, value] = data[i].split(' ')
        if (j === i) {
          action = action === 'jmp' ? 'nop' : 'jmp'
        }
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
      indexes = []
      acc = 0
    }
  }
}

console.log(infiniteProgramTwo(data))