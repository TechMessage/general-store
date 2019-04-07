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


## ImageData
1. 该对象 代表了 canvas 对象的底层的像素数据 ，它是一个对象
2. 属性包括 width, height, data

3. 该对象的data属性 返回的是一个数组，该数组是每一个值都是[0,255]表示一个像素的值，而图像中每一个像素点其实由4部分组成，RGBA，每个都是占据数组总的一个索引的位置，该数组每四个值表示一个像素的颜色信息，图片的像素点从左到右，一行一行像素存储到data中

4. 创建imageData对象的方式
   1. 根据已知的canvas对象的ctx上下文
   2. ctx.createImageData(w, h)
   3. ctx.getImageData(left, top, width, height) //获取当前ctx的 imageData对象，继而可获取到data值
   


5. 保存图片
   1. canvas提供了api可以保存当前的canvas 为图片



### 使用canvas的一些优化项
1. 坐标值不要使用小数，尽量使用整数，使用小数的话，会让浏览器在渲染的时候另外进行计算来实现抗锯齿的效果，尤其是在使用drawImage的api的时候，

2. 在使用dramImage的时候不要使用 对图片进行缩放操作

3. 为了实现复杂的 图形， 可以使用多层的canvas 叠加，类似ps中的图层，每一层都是canvas渲染的。

4. 实现多层的 canvas

5. 缩放canvas 使用 css 的transform 属性，因为它使用了gpu进行技术速度会更快

6. 关闭背景透明 在获取canvas的上下文的时候如果不需要背景透明，可以关闭，优化渲染速度










