const {readFile,writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt','utf8', (err,result) => {
    if(err){
        console.log(err);
        return
    }
    //console.log(result);
    const first = result;
    readFile('./content/subfolder/test.txt','utf8',  (err,result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './content/result_async.txt',
            `Here is the result : ${first}, ${second}`
            ,(err) => {
                if(err) {
                    console.log(err);
                }
                console.log('File created!');
            })
    })

})

console.log('starting next task');
