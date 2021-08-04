## jQuery的优势

- **轻量级**。核心文件才几十kb，不会影响页面加载速度
- 强大的选择器。允许使用几乎所有选择器以及jQuery独创的高级而复杂的选择器
- 出色的DOM操作的封装。
- 可靠的**事件处理机制**。
- 完善的Ajax。
- 不污染顶级变量。
- 跨浏览器兼容。基本兼容了现在主流的浏览器
- 链式编程/隐式迭代
- 对事件、样式、动画支持，大大简化了DOM操作
- 行为层与结构层分离。开发者可以使用jQuery选择器选中元素，然后直接给元素添加事件。
- 支持插件扩展开发。有着丰富的第三方的插件，例如：树形菜单、日期控件、轮播图等。
- 完善的文档。
- 免费、开源





## 认识Jquery

### 本质

>  本质是闭包——立即执行函数

 

### 原生JS-Jquery的区别

1. 原生JS和Jquery入口函数的加载模式不同
2. 原生JS会等到DOM元素加载完毕，并且图片也加载完毕才会执行
3. Jquery会等到DOM元素加载完毕，但不会等到图片也加载完毕就会执行
4. 原生JS在多个入口函数下，后面编写的会覆盖前面编写的
5. Jquery中编写多个入口函数，会以此执行。



### jQuery的入口函数

```js
$(function() {
    ...  //此处是页面DOM加载完成入口
});
$(document).ready(function() {
    ...  //此处是页面DOM加载完成的入口
});
```

1. jQuery的顶级函数`$`(是jQuery的别称)
2. jQuery对象只能使用jQuery方法，DOM对象则使用原生JavaScript的属性和方法
3. jQuery对象和DOM对象相互转换：
   1. $('DOM对象')
   2. $('DOM对象')[0]/$('DOM对象')get(0)
   3. 获取的是jQuery对象，则在变量前面加上$

### 解决Jquery与其他库的冲突

1. jQuery库在其他库之后导入

```js
//释放$的使用权
jQuery.noConflict();	//释放之后就不能使用$，改为使用jQuery

//自定义一个访问符号
var nj = jQuery.noConflict();
nj(function(){
	~
})
```

2. jQuery库在其他库之前导入

> $改为使用jQuery



### jQuery核心函数

| 核心函数 | 描述                     |
| -------- | ------------------------ |
| $()      | 代表调用jQuery的核心函数 |

### jQuery静态方法

- 通过类进行调用

| 静态方法     | 描述                               |
| ------------ | ---------------------------------- |
| each()       | 遍历数组                           |
| map()        | 遍历数组                           |
| trim()       | 去除字符串两端的空格，不影响字符串 |
| isWindow()   | 判断传入的是不是window对象         |
| isArray()    | 判断是不是数组                     |
| isFunction() | 判断是否为函数                     |
| holdReady()  | 暂停入口函数的执行                 |

实例方法：

1. 通过类的实例(对象)调用



## jQuery选择器

### 基本选择器

### 层级选择器

### 过滤选择器

#### `基本筛选器`过滤

#### `内容`过滤

#### `可见性`过滤 

#### `属性`过滤

#### `子元素`过滤

### 表单选择器

> `$("选择器")`

jQuery中文文档：https://jquery.cuishifeng.cn/index.html

- 并集选择器——$("div,p,li")
- 交集选择器——$("li.current")

### jQuery筛选方法（重点）

- parent()——查找父级
- parents()——查找祖先
- children(selector)——最近一级（亲儿子）
- find(selector)——相当于后代选择器
- siblings(selector)——查找兄弟节点，不包括自己本身
- nextALl([expr ])——查找当前元素之后的所有同辈元素
- prevtAll([expr ])——查找当前元素之前的所有同辈元素
- hasClass(class)——检查当前的元素是否含有某个特定的，如果有，则返回true
- eq(index)——index从0开始





## jQuery中的DOM操作

> 任何对象都有属性，但是只有在DOM元素才有属性节点

### 文档元素(节点操作)

#### 查找节点

#### 创建节点

```js
$("<li></li>");
```

#### 插入节点

#### 删除节点

#### 复制节点

浅复制clone(false)

> 仅复制节点

深复制clone(true)

> 不仅复制节点元素，且复制事件

#### 包裹节点



### 属性操作

官方推荐在操作属性节点时，具有true 和 false 两个属性的属性节点，如checked，selected，disabled 使用 prop()，其他使用 attr()

prop()

> - element.prop("属性")——获取元素固有属性值
> - prop("属性","属性值")——设置元素（不仅可以操作属性值，还可以操作属性节点）

attr(name|pro|key,val|fn)

> 作用：获取或者设置属性节点的值
>
> 1. 可以传递一个参数，也可以传递两个参数
> 2. 如果传递一个参数——属性，代表获取属性节点的值（都只会返回第一个元素指定的属性节点的值）
> 3. 如果传递两个参数，代表设置属性节点的值（若没有，则创建一个）

date()

> - date()——数据缓存，存放在元素内存中
> - date("name","value")——向被选元素附加数据
> - date("name")——向被选元素获取数据

Attribute()

> - setAttribute("name","value")——设置属性节点
> - getAttribute("name")——获取属性名称

#### css样式操作

##### 获取样式和设置样式——attr()

##### 追加样式——addClass()

##### 移除样式——removeClass()

##### 切换样式

> 1. toggle（）
> 2. toggleClass（）

##### hasClass()	

##### jQuery内容文本值——主要针对元素内容和表单的值操纵

1. 普通元素内容html()——相当于原生inner HTML

> html()——获取元素内容
> html("内容")——设置元素内容

1. 普通元素文本内容text()——相当于原生inner HTML

> text()——获取元素的文本内容
> text("文本内容")——设置元素的文本内容

1. 表单的值val()——相当于原生value

> val()——获取表单的值
> val("内容")——设置表单的值
>
> - defaultValue属性包含该表单元素的初始值

> toFixed(位数)——保留小数位

🌺原生JS中className会覆盖元素原先里面的类名。jQuery里面类操作只是对指定类进行操作，不影响原先类名。

排他思想=>注意隐式迭代

#### 遍历节点

##### children()

##### next()

##### prev()

##### siblings()

##### closest()

##### parent(),parents(),closest()de区别

##### ……



#### CSS-DOM操作

#### css()

##### height(),width()

##### offset()

##### position()

##### scrollTop(),scrollLeft()





## jQuery中的事件

### 加载DOM

原生JS

```js
window.onload = function() {
	……
}
```

jQuery

```js
$(document).ready(function(){
	……
})
```

### 执行时机

> 1. 原生JS是在网页中所有的元素（包括元素的所有关联文件）完全加载到浏览器后才执行
> 2. jQuery则是在DOM完全就绪时就可以被调用，然而所有元素关联的文件都不一定下载完毕

### 事件绑定

1. eventName（fn）
2. on（eventName，fn）

#### 改变绑定事件的类型

```js
$(function(){
	$("").on("click",function(){
		……
	}).on("mouseover",function(){
		……
	})
})
```

#### 简写绑定事件

```js
$(function(){
	$("").mouseover(function(){
		……
	}).mouseout(function(){
		……
	})
})
```

### 事件切换

#### hover()

#### toggle()

### 事件冒泡

阻止事件冒泡

> 1. 在子元素事件中添加
>
>    ```js
>    return false;
>    ```
>
> 2. 子元素的事件对象
>
>    ```js
>    event.stopPropagation();
>    ```

阻止默认事件

> 1. 在子元素事件中添加
>
>    ```js
>    return false;
>    ```
>
> 2. 子元素的事件对象
>
>    ```js
>    event.preventDefault();
>    ```
>
>    

事件命名空间

> 1. 事件是通过on来绑定的
> 2. 事件自定义名称
> 3. 可以通过trigger 来触发事件

### 事件对象的属性

### 移除事件

#### off()

> 1. $("p").off()——解绑p元素所有事件处理程序
> 2. $("p").off("click")——解绑p元素上面的点击事件
> 3. $("p").off("click","li");——解绑事件委托

### 模拟操作

#### trigger()

> 1. element.click()——简写形式
> 2. element.trigger("type")——自动触发模式
> 3. element.triggerHandler(type)——第三种自动触发模式，不会触发元素的默认行为





## jQuery中的动画

🌺jQuery做动画效果要求要在标准模式下

> 速度参数："slow"，"normal"，"fast"

### 🌰常见**`效果`**

#### 显示隐藏

> - show()
> - hide()
> - toggle()

#### 滑动

> - slideDown()
> - slideUp()
> - slideToggle()

#### 淡入淡出：

> - fadeln()
> - fadeOut()
> - fadeToggle()
> - fadeTo()
>   //修改透明度

#### 自定义动画

> - animate()

1. 自定义简单动画

2. 累加、累减动画：`+=`、`-=`

3. 多重动画

   1. 同时执行多个动画

   ```js
   $(this).animate({letf: "200px",height: "200px"},3000)
   ```

   2. 按顺序执行多个动画

   ```js
   $(this).animate({letf: "200px"},3000)
   	   .animate({height: "200px"},3000)
   ```

4. 综合动画

5. 🐾回调函数



### 停止动画和判断是否处于动画状态

动画或效果一旦触发就会执行，如果多次触发就造成多个动画或效果排队执行

#### stop()

##### 判断元素是否处于动画状态——is(":animated")

##### 延迟动画——delay()





## 表单、表格的操作

### 单行文本框

获取 、失去焦点改变样式

### 多行文本框

1. 高度变化
2. 滚动条高度变化

### ⭐复选框应用

对复选框进行全选、反选、全不选等操作

反选🌰

```js
$("").click(function(){
	$('[name=item]:checkbox').each(function(){
		$(this).attr("checked",!$(this).attr("checked"))
        //或者简化为：this.checked =! this.checked
	})
})
```











jQuery拷贝对象

```
 $.extend([deep], target, object1, [objectN])
```

> 1. deep:如果设为true为深拷贝，默认为false浅拷贝
> 2. target:要拷贝的目标对象
> 3. object1:待拷贝到第一个对象的对象
> 4. objectN:待拷贝到第N个对象的对象
> 5. 浅拷贝是把被拷贝的对象复杂数据类型中的地址拷贝到目标对象修改目标对象会影响被拷贝对象
> 6. 深拷贝，前面加true，完全克隆（拷贝的对象，而不是地址），修改目标对象不会影响被拷贝对象。

### 链式编程和隐式迭代

隐式迭代：遍历所有DOM元素（伪数组形式存储）的过程

### 插件使用和制作

