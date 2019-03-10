/**
 *  promsie 是一个对象，接受一个参数 函数类型，执行器 executor 这个执行器会立即执行
 * 
 *  并且会接受两个 参数 这两个参数都是promise原型上的方法，用来改变promise的状态和值
 * 
 *  1 三种状态 pending fulfilled rejected
 */

//  三个常量用来标记promise的状态
const [PENDING, Fulfilled, Rejected] = ['PENDING', 'Fulfilled', 'Rejected'];


// 用es6 class的写法

class Mypromsie {

    constructor(executor) {
        
    }


}