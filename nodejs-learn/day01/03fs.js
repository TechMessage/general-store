
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




// let readstream = fs.createReadStream('03fs.js');

// let str = ''
// let count = 0;


// readstream.on('data', chunk =>{
//     str += chunk;
//     count++;
// })

// readstream.on('end', () => {
//     console.log(str)
//     console.log(count)
// })

// readstream.on('error', (err) => {
//     console.log(err)
// })


//写入流

// let writestream = fs.createWriteStream('output.txt');

// writestream.write('测试插入数据\n', 'utf8')
// writestream.write('测试插入数据\n', 'utf8')
// writestream.write('测试插入数据\n', 'utf8')
// writestream.write('测试插入数据\n', 'utf8')

// writestream.end()


let readStream = fs.createReadStream('03fs.js')
let writeStream = fs.createWriteStream('output.txt')

readStream.pipe(writeStream); //读取流向写入流写入 








