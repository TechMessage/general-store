/**
 * fs模块的作用，就是进行文件的io操作
 * 
 * 1.fs模块提供的方法都有两种形式，同步的和异步的，一般使用异步的
 * 
 * 2.异步的api一般都接收一个回调函数作为参数传递，并且回到函数的第一个形参都是作为error参数保留的
 * 
 * 
 */


const fs = require('fs')

//  fs.unlink('./xx.js', err => {
//      if(err) {
//          throw err
//      }
//      console.log('successfully delete file')
//  })


// fs.stat(__filename, (err, data) =>{
//     if(err) throw err;
//     console.log(data)
// })


/**
 * file descriptors 文件描述符
 *  对于所有的进程来说，核心维护一个表，改表记录了所有当前打开的文件和资源，这些打开的文件会被赋值一个简单
 *  的数字标识符，这个数字标识符就称之为file descriptor。在系统层面，所有的文件操作 都是使用file descriptor来
 * 定位和追踪每个文件的。window系统使用不同的方式但是机制是类似的，nodejs对不同的系统抽象出统一的方式。
 * 
 */


//  fs.open()方法用来分配新的文件描述符，通过这个来读取文件，获取文件的信息
// 同一时刻，文件描述符可打开的数量是有限制的，在操作完毕后要关闭文件描述符，不然会引起内存泄露导致应用崩溃

// fs.open(__filename, 'r', (err, fd) => {
//     if(err) throw err;
//     console.log(fd)
// })

// fs.stat(__filename, (err, stats) => {
//     if(err) throw err;
//     console.log(stats)
// })


