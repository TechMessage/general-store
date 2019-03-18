
# echarts的使用总结


## 快速使用
1. 实例化
2. 设置option
3. 使用option生成图表


## 个性化
1. 全局、系列、数据三个层级去设置数据图形的样式
2. 这里data属性值不像入门教程里那样每一项都是单个数值，而是一个包含 name 和 value 属性的对象，ECharts 中的数据项都是既可以只设成数值，也可以设成一个包含有名称、该数据图形的样式配置、标签配置的对象，具体见 data 文档。
3. 通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等，这些样式一般都会在系列的 itemStyle 里设置


## 颜色主题
1. 内置主题
```
var chart = echarts.init(dom, 'light'); var chart = echarts.init(dom, 'dark');
```

2. 自定义主题
```
// 假设主题名称是 "vintage"
$.getJSON('xxx/xxx/vintage.json', function (themeJSON) {
    echarts.registerTheme('vintage', JSON.parse(themeJSON))
    var chart = echarts.init(dom, 'vintage');
});
```



## 调色盘
1. 调色盘，可以在 option 中设置。它给定了一组颜色，图形、系列会自动从其中选择颜色。 可以设置全局的调色盘，也可以设置系列自己专属的调色盘。

```
option = {
    // 全局调色盘。
    color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],

    series: [{
        type: 'bar',
        // 此系列自己的调色盘。
        color: ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'],
        ...
    }, {
        type: 'pie',
        // 此系列自己的调色盘。
        color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
        ...
    }]
}
```


## 直接的样式设置 itemStyle, lineStyle, areaStyle, label, ...

1. 直接的样式设置是比较常用设置方式。纵观 ECharts 的 option 中，很多地方可以设置 itemStyle、lineStyle、areaStyle、label 等等。这些的地方可以直接设置图形元素的颜色、线宽、点的大小、标签的文字、标签的样式等等。



## 高亮的样式：emphasis
1. 在鼠标悬浮到图形元素上时，一般会出现高亮的样式。默认情况下，高亮的样式是根据普通样式自动生成的。但是高亮的样式也可以自己定义，主要是通过 emphasis 属性来定制。emphsis 中的结构，和普通样式的结构相同


## 异步数据的加载和更新
```
var myChart = echarts.init(document.getElementById('main'));
// 显示标题，图例和空的坐标轴
myChart.setOption({
    title: {
        text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: []
    }]
});

// 异步加载数据
$.get('data.json').done(function (data) {
    // 填入数据
    myChart.setOption({
        xAxis: {
            data: data.categories
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '销量',
            data: data.data
        }]
    });
});
```

1. ECharts 中在更新数据的时候需要通过name属性对应到相应的系列，上面示例中如果name不存在也可以根据系列的顺序正常更新，但是更多时候推荐更新数据的时候加上系列的name数据。

2. loading 动画
```
如果数据加载时间较长，一个空的坐标轴放在画布上也会让用户觉得是不是产生 bug 了，因此需要一个 loading 的动画来提示用户数据正在加载。

ECharts 默认有提供了一个简单的加载动画。只需要调用 showLoading 方法显示。数据加载完成后再调用 hideLoading 方法隐藏加载动画。

myChart.showLoading();



  
$.get('data.json').done(function (data) {
    myChart.hideLoading();
    myChart.setOption(...);
});

```


## 使用 dataset 管理数据

1. ECharts 4 开始支持了 dataset 组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以基于数据指定数据到视觉的映射。这在不少场景下能带来使用上的方便。ECharts 4 以前，数据只能声明在各个“系列（series）”中，例如：



## 在图表中加入交互组件

1. 图例组件 legend、标题组件 title、视觉映射组件 visualMap、数据区域缩放组件 dataZoom、时间线组件 timeline






