#iterators and generators 迭代器和产生器

> 处理集合中的每个元素是很常见的操作，js提供了很多方法来对数组进行迭代，例如for循环，map() filter()

## concept 概念
1. 在js中，一个iterator迭代器是一个对象，它实现了iterator protocal 迭代器协议
2. 通过next() 方法来返回一个对象包含两个属性 value, done, 如果done的值为true则说明迭代到了最后一个值了
3. 