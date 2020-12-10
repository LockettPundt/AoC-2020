const testData = require('fs').readFileSync('testInput.txt', 'utf-8').split('\n').map(x => +x )
const data = require('fs').readFileSync('input.txt', 'utf-8').split('\n').map(x => +x )

const adapterArray = (data) => {
  let sorted = data.sort((a, b) => a - b)
  const [byOne, byThree] = [...sorted, sorted[sorted.length - 1] + 3]
    .reduce((arrs, x, i, array) => {
      let last = array[i - 1] || 0
      if (last + 1 === x) {
        return [
          [...arrs[0], x],
          [...arrs[1]]
        ]
      }
      if (last + 3 === x) {
        return [
          [...arrs[0]],
          [...arrs[1], x]
        ]
      }
      return arrs
    },[[], []])
  return byOne.length * byThree.length
}

console.log(adapterArray(data))