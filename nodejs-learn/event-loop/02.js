
const fs = require('fs')

fs.readFile(__filename, () => {

    setTimeout(() => {
        console.log(1)
    }, 0);

    setImmediate(()=>{
        console.log(2)
    })

})

// $ node 02.js
// 2
// 1