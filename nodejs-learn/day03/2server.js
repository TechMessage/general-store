const http = require('http')

const router = require('./model/router')
const path = require('path')
const ejs = require('ejs')

http.createServer((req, res) => {


    res.writeHead(200, {'content-type':'text/html;charset=utf-8'})
    
    ejs.renderFile('static/test.ejs', {}, function (err, data) {
        res.end(data)
    })


}).listen(8000)
