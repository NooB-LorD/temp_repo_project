const {readFileSync,writeFileSync} = require('fs')
console.log('Start');
const first = readFileSync('./content/first.txt','utf8')

const second = readFileSync('./content/subfolder/test.txt','utf8')

console.log(first,second);

writeFileSync(
    './content/result_sync.txt',
    `Here is the result : ${second}, ${first}`,
    {flag: 'a'}
    )

console.log('done!');