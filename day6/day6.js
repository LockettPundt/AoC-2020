const data = require('fs').readFileSync('input.txt', 'utf-8');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8');
const parsedInput = data.split(/\n\s/g)

// part one...
const customDeclarationForm = (forms) => {
  return forms.map(x => x.replace(/\n/g, '')).reduce((total, x) => total += [...new Set(x)].length, 0)
}

// console.log(customDeclarationForm(parsedInput))

// part two...
const customDeclarationFormTwo = (forms) => {
  return forms
    .map(x => x.replace(/\n/g, ' '))
    .reduce((total, x) => {
      const people = x.split(' ').map(question => question.split(''))
      const totalOfYes = people.map(x => x.filter((q) => people.every(person => person.includes(q))))
      return [...total, ...new Set(totalOfYes.flat())];
    }, [])
    .reduce((sum, x) => sum += x.length, 0)
}

console.log(customDeclarationFormTwo(parsedInput))