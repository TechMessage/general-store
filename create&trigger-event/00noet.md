# 自定义事件 以及 触发事件


> 在客户端浏览器中，大部分的事件都是浏览器触发，开发者在js代码中也可以创建事件并且分配事件，以及触发事件


### 创建自定义事件

```
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { /* ... */ }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```


### 自定义事件 并且添加数据

```
var event = new CustomEvent('build', { detail: elem.dataset.time });
```


