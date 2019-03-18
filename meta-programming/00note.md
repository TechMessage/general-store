# meta programming 元编程

### 概念
> 从es6开始，js新增了两个对象proxy reflect,这两个对象可以让开发者自定义基本行为对于语言层级上操作。


### proxy  代理

> proxy 对象允许对 对象的属性进行拦截操作，触发一些自定义的方法

> terminology 术语

1. handler  一个参数对象，包含一些traps的定义
2. traps  一些方法的定义，用来获取对象的属性
3. target  目标对象 被代理的对象
4. invariants  不变性

