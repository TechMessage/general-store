
/**
 * 路由，就是根据不同的uri 找到对应的处理方法
 */


const fs = require('fs')
const path = require('path')
const url = require('url')


//读取文件获取mime类型

let getMime = (extname, callback) => {
    fs.readFile(path.join(__dirname, '../mime.json'), (err, data) => {
        if (err) {
            console.log(err)
            return false
        }
        let mimes = JSON.parse(data.toString())
        let result = mimes[extname] || 'text/html';
        callback(result)
    })
}

//

exports.static = function (req, res, staticpath) {
    //url 值
    let pathname = url.parse(req.url).pathname;

    if (pathname == '/') {
        pathname = '/index.html'
    }

    if (pathname !== '/favicon.ico') {
        fs.readFile(path.join(staticpath, pathname), (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(404, { 'content-type': 'text/html;charset=utf-8' })
                res.end('404，未找到资源')
            } else {
                getMime(path.extname(pathname), function (mime) {
                    res.writeHead(200, { 'content-type': mime })
                    res.end(data)
                })
            }
        })
    }
}

