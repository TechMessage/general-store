/**
 * 1. 大多数的nodejs 核心api都是基于事件驱动架构
 * 2. 触发器 监听器
 * 
 * 3. 事件模块events， 基本方法on , emit, off   订阅发布模式
 */


const EventEmitter = require('events');


class MyEmitter extends EventEmitter {

}


const myEmitter = new MyEmitter();

// 注册监听器
// myEmitter.on('some-event', () => {
//     console.log('I got it')
// })


// 触发事件

// myEmitter.emit('some-event')


// 注册事件 happy
// myEmitter.on('happy', data => {
//     console.log(data)
// })


// 触发事件的时候，可以携带参数给监听器，相当于订阅发布设计模式
// myEmitter.emit('happy', 'I am happy')

/**
 * async vs sync 异步 同步
 * 
 * 1.触发器 调用监听器是同步的，按照注册事件的顺序执行，这一点比较重要，可以避免紊乱和逻辑错误
 * 
 * 2.合适的时机，监听器是可以异步执行的，通过setImmediate() 或者 process.nextTick()方法
 *  
 */

// myEmitter.on('async', () => {
//     setImmediate(() => {
//         console.log('1111')
//     })
// })
// myEmitter.on('async', () => {
//     console.log('2222')
// })

// myEmitter.on('async', () => {
//     process.nextTick(() => {
//         console.log('3333')
//     })
// })


// myEmitter.emit('async')


// once() 注册的监听器仅仅触发一次

// myEmitter.once('only-for-once', () => console.log('111'))

// myEmitter.emit('only-for-once')
// myEmitter.emit('only-for-once')


/**
 * error 事件
 * 1.当event实例出错的时候，会触发特殊事件 error,如果没有对应的监听器，那么会抛出异常，导致nodejs
 * 进程退出
 * 2.如果有监听器存在，不会推出nodejs进程,导致nodejs崩溃
 */

// myEmitter.on('error', err => console.log(err))

// myEmitter.emit('error', new Error('something error occur'))


/**
 * events 暴露的类 EventEmitter
 * 
 */ 

//  myEmitter.on('aa', ()=>{})

//  myEmitter.on(Symbol('aa'), ()=>{})

// let array = myEmitter.eventNames()

// console.log(array)

