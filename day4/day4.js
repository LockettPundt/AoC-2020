const data = require('fs').readFileSync('input.txt', 'utf-8');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8')
const parsedInput = data.split(/\n\s/g).map(x => x.replace(/\n/g, ' '))


const passportValidator = (passports) => {
  return [...passports]
  .map(x => x.split(' ').map(x => x.split(':')))
  .reduce((valid, doc) => {
    if (doc.length === 8 || doc.length === 7 && !doc.find(x => x[0] === 'cid')) {
      valid += 1
    }
    return valid
  }, 0)
}

console.log(passportValidator(parsedInput))