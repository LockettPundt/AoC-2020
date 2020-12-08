const data = require('fs').readFileSync('input.txt', 'utf-8').replace(/\./g,'').split('\n');
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').replace(/\./g,'').split('\n');

const luggageCrisis = (data) => {
  const bags = data.reduce((obj, x) => {
    const [bag, contents] = x.split('contain')
    return {
      ...obj,
      [bag.trim().split(' ').slice(0, -1).join(' ')]: {
        ...contents.split(', ').reduce((contentObj, content) => {
          return {
            ...contentObj,
            [content.trim().split(' ').slice(1, -1).join(' ')]: +content.trim().split(' ').slice(0, 1) || 0,
          }
        }, {})
      }
    }
  }, {})
  
  let bagsThatHoldShinyGoldBags = []
  
  for (let i = 0; bagsThatHoldShinyGoldBags.length >= i; i++ ) {
    if (i === 0) {
      Object.values(bags).forEach((x, j) => {
        if (Object.keys(x).includes('shiny gold')) {
          bagsThatHoldShinyGoldBags.push(Object.keys(bags)[j])
        }
      })
    } else {
      Object.values(bags).forEach((x, j) => {
        if (Object.keys(x).some(item => bagsThatHoldShinyGoldBags.includes(item))) {
          !bagsThatHoldShinyGoldBags.includes(Object.keys(bags)[j]) && bagsThatHoldShinyGoldBags.push(Object.keys(bags)[j])
        }
      })
    }    
  }
  return bagsThatHoldShinyGoldBags.length
}

console.log(luggageCrisis(data))