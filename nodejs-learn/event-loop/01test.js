
const fs = require('fs')

function doReadFile(callback) {
    fs.readFile('./test.txt', callback)
}


const start = Date.now()

//




// 回调函数执行10ms
doReadFile(() => {
    
    setTimeout(() => {
        console.log(1)
        const delay = Date.now() - start;
        console.log(`${delay}ms have passed since i was sheduled`)
    }, 1);
    


    const startCallback = Date.now();
    while (Date.now() - startCallback < 5) {
        // 延迟10ms
    }


    console.log(2)

    //setImmediate()

    setImmediate(() => {
        console.log(3)
    })

})






