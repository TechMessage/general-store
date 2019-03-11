/**
 *  promsie 是一个对象，接受一个参数 函数类型，执行器 executor 这个执行器会立即执行
 * 
 *  这个执行器必须是函数，否在抛出异常
 * 
 *  并且会接受两个 参数 这两个参数都是promise原型上的方法，用来改变promise的状态和值
 * 
 *  1 三种状态 pending fulfilled rejected
 */

//  三个常量用来标记promise的状态
const [PENDING, Fulfilled, Rejected] = ['PENDING', 'Fulfilled', 'Rejected'];


// 判断一个变量是否是函数
let isFunc = v => typeof v === 'function';

// 用es6 class的写法
 
class Mypromise {

    constructor(executor) {
        // 参数不是函数，直接报异常，终止执行
        if (!isFunc(executor)) throw new Error('Mypromise must accept a function')

        // 初始化四个属性
        this._status = PENDING; //promise对象默认就是pending状态
        this._value = undefined; //默认值是undefined

        // 两个队列
        this._fulfilledQueue = [];
        this._rejectedQueue = [];

        // 执行executor
        try {
            executor(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            //异常说明执行器 出现异常，promise对象失败
            this._reject(err);
        }

    }

    // 原型方法 
    _resolve(value) {
        //改变promise的状态为成功
        if (this._status !== PENDING) return; // 状态已经改变了，就不执行了
        this._status = FULFILLED;
        this._value = value;
    }

    _reject(value) {
        // 将状态改为失败的函数
        if (this._sataus !== PENDING) return;
        this._status = REJECTED;
        this._value = value;
    }

    // then方法
    /**
     *  then方法是给promise 对象注册 状态回调函数的，当状态改变时执行对应的回调函数
     *  并且判断当前的状态，如果不是pending 那么会立即执行回调函数
     *  如果是pending状态，那么会把回调函数加入到队列中 
     * 
     *  而且该方法会返回一个新的promise对象，这个新的对象
     */

    /**
     * 
     * @param {*} onFulfilled 成功的回调
     * @param {*} onRejected  失败的回调
     * 
     * then  方法是异步执行的
     */

    then(onFulfilled, onRejected) {
        const {_status, _value} = this; //获取当前promise对象的状态和值
        let run = () => {
            //返回新的promise对象
            return new Mypromise((resolveNext, rejectNext) => {
                
                // 当前promise为成功时 执行的函数
                let fulfilled = value => {
                    try {
                        
                    } catch (error) {
                        
                    }
                }

                // 当前promise为失败时 执行的函数
                let rejected = error => {
                    try {
                        
                    } catch (error) {
                        
                    }
                }


                // 判断当前promise的状态执行对应的操作
                switch (_status) {
                    case PENDING :
                        this._fulfilledQueue.push(fulfilled);
                        this._rejectedQueue.push(rejected);
                        break;

                    case FULFILLED:
                        fulfilled(_value);
                        break;
                    case REJECTED: 
                        rejected(_value);
                        break;
                }
            })

        }


        setTimeout(run, 0); //模拟异步
    }

}




