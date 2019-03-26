
const http = require('http')

const router = require('./model/router')
const path = require('path')

http.createServer((req, res) => {

    //静态资源目录
    router.static(req,res, path.join(__dirname, 'static'))


}).listen(8000)