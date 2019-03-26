/**
 * 根据文件后缀名返回Mime类型
 */
const fs = require('fs');
const path = require('path')

let app = function (extname) {
    let data = fs.readFileSync(path.join(__dirname, '../mime.json'))
    
    data = data.toString();

    // console.log(data)

    data = JSON.parse(data);

    return data[extname] || 'text/plain';
}



module.exports = app;