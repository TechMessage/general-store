# iterator and generators 迭代器和产生器

> 对于一个集合，通常的业务需求都是需要对其的元素进行遍历，那么就需要一个迭代器来来处理遍历的过程。

## js中的迭代器
1. js中的迭代器是如何设计的，iterator


## 迭代器遵循的迭代协议(规范)
1. 迭代器是一个对象，它包含一个next方法，调用该方法相当于对集合的一次遍历操作，返回的结果为一个对象，包含value 和done 两个属性，value是本次遍历的结果，done表示是否遍历完成，done为true则表名集合中元素已经遍历结束了

2. 每次遍历都是通过迭代器调用next方法


## generator函数
1. 根据迭代器的协议规范，自定义的迭代器虽然很灵活有效，但是需要显式的维护内部的状态；为此，generator函数提供了更加有效且简便的方式来实现自己的迭代器

2. 这里函数有自己的语法要求，以function*开始
   1. generator函数的声明用function*开始，内部的代码可以使用yield 关键字
   2. 初次调用generator函数会生成该一个标准iterator迭代器，并不会执行函数体中的代码
   3. 使用generator函数返回的iterator迭代器 调用.next()方法，此时会执行函数体内的代码，直至遇到yield关键字则返回该结果作为value
   4. 每次调用next,则会从当前yield的下个语句执行到下一个yield语句并返回结果，依次往复，直至最后的yield都是执行完毕，则该迭代器的遍历就结束了



## 对象类型的迭代
1. 从数据的组成角度来说，对象类型的数据是一种无序的数据集合，自然也是可以通过迭代器来进行遍历所有的key & value的
2. 为了实现可迭代性，必须实现通过 **[Symbol.iterator]**这个属性来实现iterator方法
3. 原生可跌迭代的数据类型 string array typearray map set  这些类型默认自带[Symbol.iterator]属性



## 哪些地方要求参数具有可迭代性？
1. for ...of 语法
2. ... (展开运算符)
3. yield* (代理另个一个generator函数或者可迭代的对象)
4. 解构赋值














