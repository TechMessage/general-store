/**
 * http模块来实现 web服务器
 */

const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    console.log(req.url) //请求的url

    //localhost:8000/news?aid=213&cid=12341
    console.log(url.parse(req.url, true).query);//获取去get请求的参数对象 query

    var queryobj = url.parse(req.url, true).query;
    console.log('aid', queryobj.aid)
    console.log('cid', queryobj.cid)

    

    //设置相应头
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    res.write('hello, nodejs')
    res.end('结束本次请求')

}).listen(8000)