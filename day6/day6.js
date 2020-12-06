const data = require('fs').readFileSync('input.txt', 'utf-8');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8');
const parsedInput = data.split(/\n\s/g).map(x => x.replace(/\n/g, ''))

const customDeclarationForm = (forms) => {
  return forms.reduce((total, x) => total += [...new Set(x)].length, 0)
}
console.log(customDeclarationForm(parsedInput))