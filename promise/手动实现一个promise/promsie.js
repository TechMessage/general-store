

/**
 *  1 基本结构
 */

new Promise((resolve, reject) => {
    //执行异步的函数
    //异步执行完之后通过 执行resolve 或者 reject 来改变这个promsie的状态 和值(如果有的话)
})


/**
 * 以上的构造函数说明了 在new Promise 必须传递一个回调函数   必须是函数
 * resolve, reject 这两个参数是Promise 给它的传递的
 * 
 */

//  封装一个判断变量是否为函数的方法

const isFunction = v => typeof v === 'function';

// 封装一个自己的Promise  Mypromsie
// 三个常量 用来 表示不同的状态
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'


class Mypromise {

    // 构造函数
    constructor(handle) {

        // 判断handle是否为函数
        if (!isFunction(handle)) {
            throw new Error('mypromsie must accept a function as a parameter')
        }

        // 添加状态 和 值属性
        this._status = PENDING;
        this._value = undefined;
        // 添加 队列，存onFulfilled, onRejected
        this._fulfilledQueues = []
        this._rejectedQueues = []

        // 执行handle
        try {
            // 给回调函数传入参数，resolve, reject 两个函数
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }

    _resolve(val) {
        // resolve
        /**
         * 这个方法就是改变 promsie 的状态 和 值
         * 状态 pending ====> fulfilled   
         * 
         * 依次执行队列中的函数，执行完一个，清除一个
         */

        const run = () => {
            if (this._status !== PENDING) return;
            this._status = FULFILLED;
            const runFulfilled = value => {
                let cb;
                while(cb = this._fulfilledQueues.shift()) {
                    cb(value)
                }
            }
            const runRejected = error => {
                let cb;
                while(cb = this._rejectedQueues.shift()) {
                    cb(error)
                }
            }

            //如果resolve接受的参数为一个promise对象，则必须等这个promise对象状态改变时，
            // 然后执行resolve方法时，才能改变当前的promise对象的状态，而且状态取决于参数promise的状态
            if(val instanceof Mypromise) {
                val.then(value => {
                    this._value = value;
                    runFulfilled(value)  // val 状态成功时 执行 runFulfilled 改变当前的promise对象的状态
                }, err => {
                    this._value = err;
                    runRejected(err)
                })
            }else {
                this._value = val;
                runFulfilled(val);
            }
        }

        setTimeout(run, 0) //异步执行
    }

    _reject(err) {
        // 原理和_resolve方法类似
        if (this._status !== PENDING) return
        const run = () => {
            this._status = REJECTED;
            this._value = err;
            let cb;
            while (cb = this._rejectedQueues.shift()) {
                cb(err)
            }
        }

        setTimeout(run, 0)  //异步执行
    }



    // then 方法    核心方法
    /**
     * 
     * @param {*} onFulfilled 
     * @param {*} onRejected 
     *  
     * 1 从参数上可以看出，需要两个事件handler 
     * 当promise 对象的状态 从pending ===> fulfilled 时 执行 onFulfilled
     * 当...................pending ..... rejected   ....  onRejected
     * 
     * 2 这两个handler接受参数，第一个参数为该promise 的 _value值
     * 
     * 3 这两个handler只能 执行一次，因为promsie的状态只能转变一次，就固定了，不能再次改变
     * 
     * 4 then方法可以 多次使用，相当于注册了多个事件handler，当状态改变时，这些注册的
     *   handler依次执行
     * 
     * 这个有点类似事件机制，监听事件，触发handler，可以注册多个handler,不同的是状态之能
     * 改变一次，handler 也只能执行一次
     * 
     * 5 该方法要返回一个新的promse 对象，这样可以支持链式编程
     * 
     *      5.1 
     */
    then(onFulfilled, onRejected) {
        const { _status, _value } = this;
        return new Mypromise((onFulfilledNext, onRejectedNext) => {
            // 封装一个 成功时执行的回调 状态成功的时候应该执行onFulfilled
            let fulfilled = value => {
                try {
                    if (!isFunction(onFulfilled)) {
                        // 调用then时传入的不是一个函数时
                        onFulfilledNext(value)
                    } else {
                        let res = onFulfilled(value) //执行onFulfilled 这个
                        if (res instanceof Mypromise) {
                            // 如果返回的是promise ，那么必须等待其状态改变时执行下一个回调
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            // 返回的结果不是promise ，直接作为参数 传入下一个then的回调，并且立即执行
                            onFulfilledNext(res)
                        }
                    }
                } catch (error) {
                    // 如果发生异常，新的promise 状态为失败
                    onRejectedNext(error)
                }
            }

            let rejected = error => {
                try {
                    if (!isFunction(onRejected)) {
                        onRejectedNext(error)
                    } else {
                        let res = onRejected(error)
                        if (res instanceof Mypromise) {
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            onFulfilledNext(res)
                        }
                    }
                } catch (error) {
                    onRejectedNext(error)
                }
            }

            switch (_status) {
                case PENDING:  //pending时  注册 onFulfilled ,onRejected
                    this._fulfilledQueues.push(fulfilled);
                    this._rejectedQueues.push(rejected);
                    break;

                case FULFILLED:
                    fulfilled(_value);
                    break;

                case REJECTED:
                    rejected(_value)
                    break
            }

        })

    }
}




