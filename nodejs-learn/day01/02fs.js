/**
 * fs 模块专门用来处理 文件的读取和写入
 */


const fs = require('fs')
const path = require('path')


// fs.stat(path.join(__dirname, '02fs.js'), (err,stats) => {
//     if(err) {
//         console.log(err)
//         return
//     }

//     console.log(stats.isDirectory()) //判断是否是目录
//     console.log(stats.isFile())   // 判断是否是文件
// })


// fs.mkdir(path.join(__dirname, 'css'), err => {
//     if(err) {
//         console.log(err)
//         return ;
//     }
//     console.log('目录创建成功')
// })

// fs.writeFile('1.text', '测试写入文件\n', 'utf8', err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('文件写入成功')
// })

// fs.appendFile('1.txt', '新增的内容\n', err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('文件追加内容写入成功')
// })


// fs.readFile('02fs.js', (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(data.toString())
// })


// fs.readdir(__dirname, (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     }
     
// })

// fs.rename('1.txt', '2.txt', err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('文件名修改成功')
// })

// fs.rmdir('css', err => {
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log('删除目录成功')
// })

// fs.unlink('2.txt', err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('删除文件成功')
// })





