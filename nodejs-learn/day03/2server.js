const http = require('http')

const router = require('./model/router')
const path = require('path')
const ejs = require('ejs')
const url = require('url')

http.createServer((req, res) => {


    res.writeHead(200, {'content-type':'text/html;charset=utf-8'})


    let pathname = url.parse(req.url).pathname;

    //请求的方法
    let method = req.method.toLowerCase()//

    /**
     * get请求参数的获取
     * url.parse(req.url, true).query // 返回的是对象
     */


    if(pathname == '/login' && method == 'get') {
        //请求参数
        console.log(url.parse(req.url, true).query)
        ejs.renderFile('views/login.ejs', {
            msg:'login页面'
        }, function (err, data) {
            res.end(data)
        })
    }else if(pathname == '/dologin' && method == 'post') {
        //post 请求参数 req 实际上是一个读取流
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        })
        req.on('end', function () {
            console.log(body)
        })
        ejs.renderFile('views/dologin.ejs', {
            msg:'登录',
            list:[1,2,3]
        }, function (err, data) {
            res.end(data)
        })
    }


}).listen(8000)
