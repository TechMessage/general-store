/**
 * 异步读取文件
 */

const fs = require('fs')
const path = require('path')

let app = function (EventEmitter,extname) {
    fs.readFile(path.join(__dirname, '../mime.json'), (err, data) => {
        if(err) {
            console.log(err)
            return false;
        }
        let mimes = JSON.parse(data.toString())
    
        let result = mimes[extname] || 'text/plain';

        //事件广播出去，携带数据
        EventEmitter.emit('to-mime', result)

    })
}


module.exports = app;