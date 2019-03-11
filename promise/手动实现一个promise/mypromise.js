/**
 * 手动实现自己的promise对象
 */

let isFunc = v => typeof v === 'function'; //判断是否是对象类型

// 定义三个常量用来表示promise对象的状态
const [PENDING, FULFILLED, REJECTED] = ['PENDING', 'FULFILLED', 'REJECTED']



class Mypromise {

    constructor(handler) {
        if (!isFunc(handler)) throw new Error('参数不是一个函数类型')

        // 给promise对象 初始状态和值
        this._status = PENDING
        this._value = undefined

        // 缓存 状态回调函数 队列
        this._fulfilledQueue = []
        this._rejectedQueue = []

        // 执行handler
        try {
            // 传入两个参数 _resolve, _reject
            handler(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }


    }

    _resolve(val) {
        // 应该是执行队里，而且是异步的执行
        //这两个方法就是用来改变promise的状态和值，继而执行状态回调队列
        let run = () => {

            if (this._status !== PENDING) return;

            this._status = FULFILLED;
            this._value = val;
            let cb;
            while (cb = this._fulfilledQueue.shift()) {
                cb(val);
            }

        }

        setTimeout(run, 0)

    }

    _reject(val) {
        let run = () => {
            if (this._status !== PENDING) return;
            this._status = REJECTED;
            this._value = val;
            let cb;
            while(cb = this._rejectedQueue.shift()) {
                cb()
            }
        }
        setTimeout(run, 0)
    }


    // then方法 核心方法
    // 状态回调注册、执行、异步的
    // 返回新的promise对象以支持链式编程
    then(onFulfilled, onRejected) {
        const { _status, _value } = this;
        return new Mypromise((resolve, reject) => {
            // 包装状态成功时的回调
            let fulfilled = v => {
                try {
                    if (!isFunc(onFulfilled)) {
                        //如果不是函数,直接忽略
                        resolve(v) //新生成的promise对象的状态为成功
                    } else {
                        let res = onFulfilled(v);
                        if (res instanceof Mypromise) {
                            res.then(resolve, reject);//如果返回值是promise对象，那么该返回值的状态决定了新的状态
                        } else {
                            resolve(res)
                        }
                    }
                } catch (error) {
                    reject(error)
                }

            }

            let rejected = v => {
                try {
                    if (!isFunc(onRejected)) {
                        reject(v)
                    } else {
                        let res = onRejected(v);
                        if (res instanceof Mypromise) {
                            res.then(resolve, reject)
                        } else {
                            resolve(res)
                        }
                    }
                } catch (error) {
                    reject(error)
                }
            }

            // 根据当前promise的状态执行对应的操作
            switch (_status) {
                case PENDING:
                    this._fulfilledQueue.push(fulfilled)
                    this._rejectedQueue.push(rejected)
                    break;
                case FULFILLED:
                    fulfilled(_value)
                    break;
                case REJECTED:
                    rejected(_value)
                    break
            }
        })
    }
}