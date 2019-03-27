
const express = require('express')
const path = require('path')

const bodyParser = require('body-parser') //处理post请求的中间件

let app = new express()


//配置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) //模板位置目录


//中间件

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(function (req,res,next) {
    //匹配所有请求
    console.log(new Date())//每次请求时打印时间
    next()
})


//配置静态文件web服务
app.use(express.static(path.join(__dirname, 'public'))) 
// app.use('/static',express.static(path.join(__dirname, 'pubic'))) //可配置虚拟的静态目录



// 配置路由规则

app.get('/news/:id', function (req,res) {
    //动态路由传值
    res.send('news ===> ' + req.params.id) 
})

app.get('/product', function (req, res) {
    //get 传值               
    res.send('product ===> ' + JSON.stringify(req.query))
})

app.get('/login', function (req, res) {
    res.render('login', {
        msg:'hello ejs xxx'
    })
})

app.post('/post', function (req, res) {
    // res.send('post提交数据')
    res.send(JSON.stringify(req.body))
})

app.listen(8000)