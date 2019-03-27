
const express = require('express')
const path = require('path')

const bodyParser = require('body-parser') //处理post请求的中间件
const cookieParser = require('cookie-parser')
const session = require('express-session')

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

//session
/**
 * session是存在服务端的，可以配置redis和数据库实现持久化，
 * session是在用户第一次请求时，在服务端生成并保存的，同时生成一个cookie，该cookie保存了session的id，
 * cookie返回给客户端，第2次请求时cookie发送给服务端，通cookie中保存的session_id来找到对应的session信息
 * 
 * session是建立客户端和服务端数据保存的
 * 
 */
app.use(session({
    name:'session_id', //本地保存sessionid的cookie名
    secret:'session-id',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:30*1000*60 //30分钟cookie失效
    },
    rolling:true, //每次请求重置cookie的失效时间，每次
}))


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
    //保存session
    req.session.userinfo = 'zhangs';

    res.render('login', {
        msg:'hello ejs xxx'
    })
})

app.get('/user', function (req,res) {
    //获取session信息
    console.log(req.session.userinfo)
    res.send(req.session.userinfo)
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
        maxAge:60*1000*10, //10分钟
        httpOnly:true, //客户端脚本不能访问
        domain: '.aaa.com', //多个二级域名共享
        // path:'/get', //仅仅 /get路由下可以访问到cookie
        signed:true, //加密 cookie的value值会被加密
    })

    // console.log(cities)

    res.send(city)
})

app.listen(8000)