
const express = require('express')

let app = new express()


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

app.listen(3000)