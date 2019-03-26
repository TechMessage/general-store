
const http = require('http')
const fs = require('fs')
const path = require('path')
const getmime = require('./model/getMime')

http.createServer((req, res) => {

    //1
    let pathname = req.url
    if (pathname === '/') {
        pathname = '/index.html'
    }

    //2
    fs.readFile(path.join(__dirname, 'static', pathname), (err, data) => {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/html;charset=utf-8' })
            console.log(err) //报错
            fs.readFile(path.join(__dirname, 'static', '404.html'), (err, data) => {
                if (err) {
                    console.log(err)
                    res.end('资源为找到')
                } else {
                    res.end(data)
                }
            })

        } else {
            let mime = getmime(path.extname(pathname))
            res.writeHead(200, mime)
            res.end(data)
        }
    })


}).listen(8000)