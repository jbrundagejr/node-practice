const {readFileSync, writeFileSync} =require('fs')

console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
  './content/result-sync.txt', 
  `here is the result: ${first}, ${second}.`,
  // appends text everytime code is rerun
  {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')

// can make the entire app crash if task takes long time