
const express = require('express')
const path = require('path')
let app = new express()


// 配置ejs模板
app.set('view engine', 'ejs')
//设置模板的位置
app.set('views', path.join(__dirname, 'views'))

// app.use() 使用中间件
//express.static() 为public目录下的文件提供静态web服务,该方法返回的是一个中间件
app.use(express.static('public'))

// http://localhost:3000/static/test.html 会去public目录下找test.html文件
app.use('/static', express.static('public')) //配置静态文件虚拟目录

app.get('/', function (req,res) {
    res.send('hello, express')
})


app.get('/news', function (req, res) {
    res.send('hello, news')
})

// 动态路由传值 :id
app.get('/news/:id', function (req, res) {
    //获取请求参数
    console.log(req.params) //获取动态路由传值的方法

    res.send('news'+req.params.id)
})

// get请求传值
app.get('/product', function (req, res) {
    //get请求的传值获取
    console.log(req.query)
    res.send('product' + req.query.id)
})

app.listen(3000)