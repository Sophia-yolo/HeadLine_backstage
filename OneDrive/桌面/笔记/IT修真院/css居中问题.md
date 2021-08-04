







#### 块级盒子水平居中对齐

条件：

1. 指定盒子宽度
2. 左右外边距设置为auto

写法：

- margin-left;auto；   margin-right:auto；
- margin=auto；
- margin:0  auto；

#### 对齐

- 要水平居中对齐一个元素(如 <div>), 可以使用 **margin: auto;**注意：如果没有设置 **width** 属性(或者设置 100%)，居中对齐将不起作用。
- 如果仅仅是为了文本在元素内居中对齐，可以使用 **text-align: center;**
- 我们可以使用 **position: absolute;** 属性来对齐元素:
- 我们也可以使用 **float** 属性来对齐元素:
- 实现垂直居中对齐：一个简单的方式就是头部顶部使用 **padding**:
- 如果要水平和垂直都居中，可以使用 **padding** 和 **text-align: center**:

像这样对齐元素时，对 <body> 元素的外边距和内边距进行预定义是一个好主意。这样可以避免在不同的浏览器中出现可见的差异。

*注意：如果子元素的高度大于父元素，且子元素设置了浮动，那么子元素将溢出，这时候你可以使用 "***clearfix**(清除浮动)" 来解决该问题。

我们可以在父元素上添加 overflow: auto; 来解决子元素溢出的问题:



#### 使用高对比度文本提高可读性

- Web 内容无障碍指南（WCAG）建议正常文本的对比度至少为 4.5 : 1。
- 对比度是通过比较两种颜色的相对亮度值来计算的，其范围是从相同颜色的 1 : 1（无对比度）到白色与黑色的最高对比度 21 : 1。

## 垂直居中

#### 写法1：

适用场景：

1. ​	任意尺寸图片
2. ​     内联块状的多行文字

```
div { line-height: 240px; font-size: 0; }
img { vertical-align: middle; }
//实现图片垂直居中
```



#### 写法2：利用position和top和transform

使用场景：

- ​	元素高度未知

优点：

- ​	适用于子元素为浮动，绝对定位，内联元素

```
.partent {
	position:relative;
	width:200px;
	height:200px;
	border:1px solid blue;
}
.child {
	position:absolute;/*参照物是父容器*/
	top:50%;
	transform:translateY(-50%);/*百分比的参照物是本身*/
	line-height:100px;
	background-color:red;
}
```







#### 写法3：`flex`布局

使用场景：

- ​	元素高度未知

优点：

- ​	适用于子元素为浮动，绝对定位，内联元素

```
.partent {
	dispaly:flex;
	align-items:center;
}
```



#### 写法4：单行文本垂直居中

```
<!-- html部分方案一 -->
    <div class="center">
        123
    </div>
/* css部分方案一 */
     .center{
          padding-top:50px;
          padding-bottom:50px;
          background: indianred;
     }
 <!-- html部分方案二 -->
    <div class="center">
        123
    </div>
/* css部分方案二 */
     .center{
        width: 300px;    
        height: 200px;
        line-height: 200px;/*高度设为文字父容器的高度*/
        background: indianred;
      }

```



#### 写法5：多行文本垂直居中

```
<!-- html部分 -->
    <div class="center">
        <div class="table-div">多行文本垂直居中</div>
    </div>
 /* css部分 */
       .center{
           width: 300px;
           height: 200px;
           display: table;
            border: 2px solid blue;
        }
        .table-div{
            display: table-cell;
            vertical-align: middle;
            border: 1px solid red;
        }
```



#### 写法6：利用position和top和负margin(需知宽高)

要点：

1. ​	设置元素为absolute/relative/fixed
2. ​     margin=负一半

```
.parent{
	position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid blue;
}
.child{
	position: absolute;
    height: 100px;
    width: 150px;
    top: 50%;
    margin-top: -50px;
    line-height: 100px;
    background-color: red;
}
```



#### 写法7：利用`position`和`top`/`bottom`和`margin：auto`

```
 .parent{
 	position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid blue;
}
.child{
    position: absolute;
    height: 100px;
    width: 150px;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 100px;
    background-color: red;
}
```



## 水平居中

```
<div class="parent">
	<div class="child">
	DEMO
	</div>
</div>
```

#### 写法1：`display：inline-block;`

(可让`inline/inline-block/inline-table/inline/flex`居中) 

```
.parent {
	text-align:center;
}
.child {
	display：inline-block;
	/*子元素文字会继承居中,因此添加向左居中*/
	text-align:left;
}
```

**空白缝隙的解决方案**

1. 物理删除空隙——去掉HTML中的空格
2. 使用margin负值——不适合大规模
3. 使用`font-size:0`

```
.parent {
	font-size:0;
}
.child {
	font-size:16px;
}
```

	4. 使用letter-spacing或者word-spacing（类似于上一条）



#### **写法2**：`display:table;`

(或设置为其他块级元素，前提设置宽度width，不然会拉伸成父元素的宽度<!--在child div的内容过长时拓展不好-->)

```
<!--宽度默认由内容决定，兼容IE8-->
.child {
	display:table;
	margin:0 auto;
}
```



#### 写法3：`position:absolute;`

<!--宽度默认由内容决定，优点是居中的元素不会对其他元素产生影响，脱离正常流-->

```
.partent {
	position:relative;
}
.child {
	position:absolute;/*参照物是父容器*/
	left:50%;
	transform:translateX(-50%);/*百分比的参照物是本身*/
}
```

```
.partent {
	position:relative;
}
.child {
	position:absolute;
	width:100px;
	left:0;
	right:0;
	margin:0 auto;
}
```



#### 写法4：`display:flex;`

- 适用于子元素浮动、绝对定位、内联元素，均可水平居中,元素高度未知。
- 只需把要处理的块元素的父级设置就可

```
.partent {
	dispaly:flex;
	justify-content:center;
}
```



#### 写法5：设置margin

此方法只能进行水平居中，且对浮动元素或绝对定位元素无效。

```
.partent {
	width:100%;*****
}
.child {
	width:600px;
	height:50px;
	margin:0 auto;
	background:#999;
}
```



#### 写法6:

若居中的元素为浮动元素

```
.child {
	width:100px;
	float:left;
	position:relative;
	left:50%;
	margin-left:-50px;
}
```



#### 写法7：行内元素水平居中

```
//html部分：
<div class="center">水平居中</div>
/* css部分 */
    .center{
      text-align: center;
    }
```



## 垂直水平居中

#### 写法1：`Transform` 定位

```
.child {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
}
```


特点：

1. 内容可自适应
2. 可以封装为一个公共类
3. 可做弹出层
4. 可能干扰其他 transform 效果



#### 写法2：`Flexbox` 布局

特点：

1. ​	`CSS` 布局未来的趋势
2. ​    `Flexbox` 是 `CSS3` 新增属性
3. ​    设计初衷是为了解决像垂直居中这样的常见布局问题

```
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```



#### 写法3：负边距居中

特点：

1. 良好的跨浏览器特性,兼容 `IE6 - IE7`
2. 灵活性差，不能自适应
3. 宽高不支持百分比尺寸和 min-/max- 属性

```
.child {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
```



#### 写法4：绝对定位居中

优点：

- 可以实现在正中间
- 还可以在正左方，正右方
- 元素的宽高支持百分比 % 属性值和 min-/max- 属性
- 可以封装为一个公共类，可做弹出层
- 浏览器支持性好

```
div {
  width: 100px;
  height: 100px;
  backgrond-color:green;
  margin: auto;
  position: fixed;
  //absolute is ok
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```



#### 写法5：`table-cell` 居中

- 适用于子元素 display 为 `inline-block`, `inline` 类型的元素
- 需要已知父元素的宽高，且父元素的宽高不能设为百分比数。

```
.parent {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      width: 200px;
      height: 200px;
      border: 1px solid red;
}
.child {
      width: 100px;
      height: 100px;
      display: inline-block;
      background-color: #03f;
}
```



#### 写法6：`font-size` 配合 `vertical-align` 实现垂直居中

要点：

1. 给父元素设一个合适的 font-size 的值，这个值的取值为该父元素的高度除以 1.14 得到的值，
2. 子元素必须 是一个 `inline` 或 `inline-block` 元素，需要加上 vertical-align: middle 属性
3. 使用这种方法，子元素的宽度或高度都不必知道。

```
.parent {
  font-size: 175.4px;
  height: 200px;
  text-align: center;
}

.child {
  vertical-align: middle;
  display: inline-block;
  font-size: 12px;
  width: 50px;
  height: 50px;
  background-color: #00f;
}
```



#### 写法7：文本内容居中

```
<!-- html部分 -->
    <div class="center">文字水平垂直居中</div>
/* css部分 */
        .center{
            text-align: center;
            width: 300px;
            height: 200px;
            background: indianred;
            line-height: 200px;
        }
```

