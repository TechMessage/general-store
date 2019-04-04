## canvas

1. html5 的新标签，它带来的一些列的js api可以用来作画或者动画

### 属性

1. 元素属性 width height
2. width 默认是300px  height 默认是150px

### 使用的注意点
1. canvas标签是双标签元素，内容可以添加文本节点，在不支持的canvas的浏览器中会显示文字，可以作为提示信息

2. 不要使用css样式来指定canvas的 width height，这样有可能会把canvas渲染的图像拉伸， 直接在canvas的内联属性中定义宽，高

### canvas元素 dom提供的api
1. canvas 的dom对象 原型 HTMLCanvasElement

2. canvas 的原型链
   1. HTMLCanvasElement ==> HTMLElement ==> Element ==> Node ==> EventTarget


3. HTMLCanvasElement.getContext() ★★
   1. 在canvas对象上返回一个绘画的上下文，这个上下文可以让你在该canvas对象上绘画，需要传参 '2d'


### 基础图形
1. 基础图形就是方形 和 路线




