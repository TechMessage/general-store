
const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    //1 请求的uri
    let pathname = req.url;

    if(pathname === '/') {
        pathname = '/index.html'
    }

    //2 过滤/favicon.ico
    if(pathname !== '/favicon.ico') {
        //根据路径读取文件
        fs.readFile(path.join(__dirname, 'static', pathname), (err,data) => {
            if(err) {
                //404
                console.log(404)
                res.writeHead(404, {'content-type':'text/plain;charset=utf-8'})
                res.end('资源为找到')
            }else {
                res.writeHead(200, {'content-type':'text/html;charset=utf-8'})
                res.end(data)
            }
        })
    }


}).listen(8000)