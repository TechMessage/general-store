
const fs = require('fs')
const path = require('path')


// fs.stat('upload', (err, stats) => {
//     if(err) {
//         console.log(err)
//         //没有这么目录，则创建目录
//         fs.mkdir('upload', err => {
//             if(err) {
//                 console.log(err)
//                 return
//             }
//             console.log('目录创建成功')
//         })
//     }else {
//         //目录已经存在
//         console.log('目录已经存在')
//         console.log(stats.isDirectory())
//     }
// })

// fs.readdir(__dirname, (err, files) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(files)//数组
//     files.forEach(v => {
//         fs.stat(path.join(__dirname, v), (err, stats) => {
//             if(err) {
//                 console.log(err)
//                 return
//             }
//             if(stats.isDirectory()) {
//                 //目录
//                 console.log(v)
//             }
//         })
//     })
// })