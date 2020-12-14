const data = require('fs').readFileSync('input.txt', 'utf-8').split('\n')
const testData = require('fs').readFileSync('testInput.txt', 'utf-8').split('\n')


const shuttleSearch = (data) => {
  const timeStamp = +data[0]
  const shuttleIds = data[1].split(',')
  .filter(x => x !== 'x')
  .map(x => {
    let num = 0
    for (;;) {
      if (num < timeStamp) {
        num += +x
      } else break
    }
    return {
      id: +x,
      wait: num - timeStamp,
    }
  })
    .sort((a, b) => a.wait - b.wait)
  const { wait, id } = shuttleIds[0]
  return wait * id
}

console.log(shuttleSearch(data))