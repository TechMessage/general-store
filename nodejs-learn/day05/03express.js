
const express = require('express')
const path = require('path')

const bodyParser = require('body-parser') //处理post请求的中间件
const cookieParser = require('cookie-parser')

let app = new express()


//配置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) //模板位置目录


//中间件

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//cookie
app.use(cookieParser('sign-id')); //cookie加密 sign-id 签名随机字符串


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

app.get('/set', function (req,res) {
    //设置cookie
    res.cookie('username', 'czhsnga', {
        maxAge:6000, //6s后失效
        httpOnly:true, //客户端脚本不能访问
        domain: '.aaa.com', //多个二级域名共享
        // path:'/get', //仅仅 /get路由下可以访问到cookie
        signed:true, //加密 cookie的value值会被加密
    })

    res.send('cookie设置完成')
})

app.get('/get', function (req, res) {
    //使用获取cookie

    console.log(req.signedCookies)
    res.send(req.signedCookies)
})


//cookie的简单使用案例，记录用户的浏览信息
app.get('/lvyou', function (req, res) {
    //get传值获取
    let city = req.query.city;
    //获取cookies
    let cities = req.signedCookies.cities;

    if(cities) {
        cities = JSON.parse(cities);
        cities.push(city)
    }else {
        cities = [];
        cities.push(city)
    }

    //设置cookie
    res.cookie('cities',JSON.stringify(cities), {
        maxAge:60000000, //6s后失效
        httpOnly:true, //客户端脚本不能访问
        domain: '.aaa.com', //多个二级域名共享
        // path:'/get', //仅仅 /get路由下可以访问到cookie
        signed:true, //加密 cookie的value值会被加密
    })

    // console.log(cities)

    res.send(city)
})

app.listen(8000)