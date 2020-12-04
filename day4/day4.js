const data = require('fs').readFileSync('input.txt', 'utf-8');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8')
const validPassports = require('fs').readFileSync('validPassports.txt', 'utf-8')
const invalidPassports = require('fs').readFileSync('invalidPassports.txt', 'utf-8')
const parsedInput = data.split(/\n\s/g).map(x => x.replace(/\n/g, ' '))


const passportValidator = (passports) => {
  return [...passports]
  .map(x => x.split(' ').map(x => x.split(':')))
  .reduce((valid, doc) => {
    if (doc.length === 8 || doc.length === 7 && !doc.find(([name,]) => name === 'cid')) {
      const [byr, iyr, eyr, hgt, hcl, ecl, pid] = 
        ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].map(data => doc.find(x => data === x[0])[1])
        let heightCheck= false;
        if (hgt.slice(-2) === 'cm') {
          heightCheck = 150 <= +hgt.slice(0, -2) && +hgt.slice(0, -2) <= 193
        } else if (hgt.slice(-2) === 'in') {
          heightCheck = 59 <= +hgt.slice(0, -2) && +hgt.slice(0, -2) <= 76
        }
      const dataValidation = [
        1920 <= +byr && +byr <= 2002 && byr.length === 4,
        2010 <= +iyr && +iyr <= 2020 && iyr.length === 4,
        2020 <= +eyr && +eyr <= 2030 && eyr.length === 4,
        heightCheck,
        /^[a-z0-9]+$/g.test(hcl.slice(1)) && hcl[0] === '#',
        ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl),
        pid.length === 9 && !!+pid,
      ]
      if (dataValidation.every(x => !!x)) {
        valid += 1
      }
    }
    return valid
  }, 0)
}

console.log(passportValidator(parsedInput))