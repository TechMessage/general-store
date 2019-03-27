
const express = require('express')
const path = require('path')

let app = new express()


//配置模板引擎
app.set('view engine', 'ejs');

//配置静态文件web服务
app.use(express.static(path.join(__dirname, 'pubic'))) 
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


app.listen(8000)