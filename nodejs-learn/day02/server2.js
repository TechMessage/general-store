
const http = require('http')
const fs = require('fs')

const url = require('url')
const path = require('path')
const getMime = require('./model/getMime')
http.createServer((req, res) => {

    //1 
    let pathname = req.url

    if (pathname === '/') {
        pathname = '/index.html'
    }

    //2

    if (/*pathname !== '/favicon.ico' */ true) {
        
        fs.readFile(path.join(__dirname, 'static', pathname), (err, data) => {
            if(err) {
                console.log(err)
                //404
                res.writeHead(404, {'content-type':'text/html;charset=utf-8'})
                res.end('资源未找到')
            }else {
                //读取文件
                let extname = path.extname(pathname);
                let mime = getMime(extname);
                res.writeHead(200, {'content-type':mime})
                res.end(data)
            }
        })
    }



}).listen(8000)


