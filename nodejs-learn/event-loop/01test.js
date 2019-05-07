
const fs = require('fs')

function doReadFile(callback) {
    fs.readFile('./test.txt', callback)
}


const start = Date.now()

//
setTimeout(() => {
    console.log(1)
    const delay = Date.now() - start;
    console.log(`${delay}ms have passed since i was sheduled`)
}, 20);


// 回调函数执行10ms
doReadFile(() => {
    
    const startCallback = Date.now();
    while(Date.now() - startCallback < 5) {
        // 延迟10ms
    }
    console.log(2)
})






