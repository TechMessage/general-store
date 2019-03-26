const http = require('http')

const router = require('./model/router')
const path = require('path')
const ejs = require('ejs')
const url = require('url')

http.createServer((req, res) => {


    res.writeHead(200, {'content-type':'text/html;charset=utf-8'})


    let pathname = url.parse(req.url).pathname;

    if(pathname == '/login') {

        ejs.renderFile('views/login.ejs', {
            msg:'login页面'
        }, function (err, data) {
            res.end(data)
        })
    }else if(pathname == '/dologin') {
        ejs.renderFile('views/dologin.ejs', {
            msg:'登录',
            list:[1,2,3]
        }, function (err, data) {
            res.end(data)
        })
    }




    

   


}).listen(8000)
