### 请你说说 CSS 有什么特殊性?（优先级、计算特殊值）

**优先级：** 

(1)、同类型，同级别的样式后者先于前者 

(2))、ID > 类样式 > 标签 > * 

(3)、内联>ID 选择器>伪类>属性选择器>类选择器>标签选择器>通用选择器(*)> 继承的样式 

(4)、具体 \> 泛化的，特殊性即 css 优先级 

(5)、近的 \> 远的 (内嵌样式 > 内部样式表 > 外联样式表) 

内嵌样式：内嵌在元素中，`<span style="color:red">span</span>` 

内部样式表：在页面中的样式，写在`<style></style>`中的样式

外联样式表：单独存在一个 css 文件中，通过 link 引入或 import 导入的样 式

(6)、!important 权重最高，比 inline style 还要高 

**计算特殊性值** 

important > 内嵌 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符 

**权重、特殊性计算法：** 

CSS 样式选择器分为 4 个等级，a、b、c、d 

(1)、如果样式是行内样式（通过 Style=“”定义），那么 a=1，1,0,0,0 

(2)、b 为 ID 选择器的总数 0,1,0,0 

(3)、c 为属性选择器，伪类选择器和 class 类选择器的数量。==0,0,1,0== 

(4)、d 为==标签==、==伪元素选择器==的数量 ==0,0,0,1== 

(5)、!important 权重最高，比 inline style 还要高 

比如结果为：1093 比 1100，按位比较，从左到右，只要一位高于则立即胜出， 否则继续比较。



### 盒子模型

**回答一：** 

a、标准的 css 盒子模型：宽度=内容的宽度+边框的宽度+加上内边框的宽度

b、网页设计中常听的属性名：内容(content)、填充(padding)、边框(border)、 边界(margin)， CSS 盒子模式都具备这些属性。 

c、这些属性我们可以把它转移到我们日常生活中的盒子（箱子）上来理解，日 常生活中所见的盒子也就是能装东西的一种箱子，也具有这些属性，所以叫它盒子模式。CSS 盒子模型就是在网页设计中经常用到的 CSS 技术所使用的一种思维模型。

**回答二：** 

标准的盒模型：width = content 

IE 盒模型：width = content+padding-Left+padding-right+border-left + border-right



### 常见浏览器兼容性问题与解决方案？ 

（1）**浏览器兼容问题一：不同浏览器的标签默认的外补丁和内补丁不同** 

问题症状：随便写几个标签，不加样式控制的情况下，各自的 margin 和 padding 差异较大。 

碰到频率:100% 

解决方案：CSS 里 `*{margin:0;padding:0;}` 

**（2）浏览器兼容问题二：块属性标签 float 后，又有横行的 margin 情况下，** **在 IE6 显示 margin 比设置的大** 

问题症状:常见症状是 IE6 中后面的一块被顶到下一行 

碰到频率：90%（稍微复杂点的页面都会碰到，float 布局最常见的浏览器兼容问题） 

解决方案：在 float 的标签样式控制中加入 `display:inline;`将其转化为行内属性

备注：我们最常用的就是 div+CSS 布局了，而 div 就是一个典型的块属性标签，横向布局的时候我们通常都是用 div float 实现的，横向的间距设置如果用 margin 实现，这就是一个必然会碰到的兼容性问题。

**（3）浏览器兼容问题三：设置较小高度标签（一般小于 10px），在 IE6，IE7，** **遨游中高度超出自己设置高度** 

问题症状：IE6、7 和遨游里这个标签的高度不受控制，超出自己设置的高度 

碰到频率：60% 

解决方案：给超出高度的标签设置 `overflow:hidden;`或者设置行高 `line-height` 小于你设置的高度。 

备注：这种情况一般出现在我们设置小圆角背景的标签里。出现这个问题的原因 是 IE8 之前的浏览器都会给标签一个最小默认的行高的高度。即使你的标签是空 的，这个标签的高度还是会达到默认的行高。 

**（4）浏览器兼容问题四：行内属性标签，设置 display:block 后采用 float 布** 

**局，又有横行的 margin 的情况，IE6 间距 bug** 

问题症状：IE6 里的间距比超过设置的间距 

碰到几率：20% 

解决方案 ： 在 display:block;后面加入 display:inline;display:table; 

备注：行内属性标签，为了设置宽高，我们需要设置 display:block;(除了 input 标签比较特殊)。在用 float 布局并有横向的 margin 后，在 IE6 下，他就具有了块属性 float 后的横向 margin 的 bug。不过因为它本身就是行内属性标签，所以我们再加上 display:inline 的话，它的高宽就不可设了。这时候我们还需要在 display:inline 后面加入 display:talbe。

**(5) 浏览器兼容问题五：图片默认有间距** 

问题症状：几个 img 标签放在一起的时候，有些浏览器会有默认的间距，加了问题一中提到的通配符也不起作用。 

碰到几率：20% 

解决方案：使用 float 属性为 img 布局 

备注：因为 img 标签是行内属性标签，所以只要不超出容器宽度，img 标签都会 排在一行里，但是部分浏览器的 img 标签之间会有个间距。去掉这个间距使用 float 是正道。（我的一个学生使用负 margin，虽然能解决，但负 margin 本身就是容易引起浏览器兼容问题的用法，所以我禁止他们使用） 

**(6) 浏览器兼容问题六：标签最低高度设置 min-height 不兼容** 

问题症状：因为 min-height 本身就是一个不兼容的 CSS 属性，所以设置 min-height 时不能很好的被各个浏览器兼容 

碰到几率：5% 

解决方案：如果我们要设置一个标签的最小高度 200px，需要进行的设置为： `{min-height:200px; height:auto !important; height:200px; overflow:visible;}` 

备注：在 B/S 系统前端开时，有很多情况下我们又这种需求。当内容小于一个值（如 300px）时。容器的高度为 300px；当内容高度大于这个值时，容器高度被撑高，而不是出现滚动条。这时候我们就会面临这个兼容性问题。

**(7)浏览器兼容问题七：透明度的兼容 CSS 设置** 

一般在 ie 中用的是 `filter:alpha(opacity=0);`这个属性来设置 div 或者是块级 元素的透明度，而在 firefox 中，一般就是直接使用 `opacity:0,`对于兼容的， 一般的做法就是在书写 css 样式的将 2 个都写上就行，就能实现兼容 





### 列出 display 的值并说明他们的作用？ 

display： none | inline | block | list-item | inline-block | table | inline-table | table-caption | table-cell | table-row | table-row-group | table-column | table-column-group | table-footer-group | table-header-group | run-in | box | inline-box | flexbox | inline-flexbox | flex | inline-flex

默认值：inline 

none： 隐藏对象。与 visibility 属性的 hidden 值不同，其不为被隐藏的对象保留其物理空间 

inline： 指定对象为==内联元素==。 

block： 指定对象为==块元素==。 

list-item： 指定对象为列表项目。 

inline-block： 指定对象为内联块元素。（CSS2） 

table： 指定对象作为块元素级的表格。类同于 html 标签<table>（CSS2） 

inline-table： 指定对象作为内联元素级的表格。类同于 html 标签<table> （CSS2） 

table-caption： 指定对象作为表格标题。类同于 html 标签<caption>（CSS2） 

table-cell： 指定对象作为表格单元格。类同于 html 标签<td>（CSS2） 

table-row： 指定对象作为表格行。类同于 html 标签<tr>（CSS2） 

table-row-group： 指定对象作为表格行组。类同于 html 标签<tbody>（CSS2） 

table-column： 指定对象作为表格列。类同于 html 标签<col>（CSS2） 

table-column-group： 指定对象作为表格列组显示。类同于 html 标签 <colgroup>（CSS2） 

table-header-group： 指定对象作为表格标题组。类同于 html 标签<thead> （CSS2） 

table-footer-group： 指定对象作为表格脚注组。类同于 html 标签<tfoot>（CSS2） 

run-in： 根据上下文决定对象是内联对象还是块级对象。（CSS3） 

box： 将对象作为弹性伸缩盒显示。（伸缩盒最老版本）（CSS3） 

inline-box：将对象作为内联块级弹性伸缩盒显示。（伸缩盒最老版本）（CSS3） 

flexbox： 将对象作为弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3） 

inline-flexbox： 将对象作为内联块级弹性伸缩盒显示。（伸缩盒过渡版本） （CSS3） 

flex： 将对象作为弹性伸缩盒显示。（伸缩盒最新版本）（CSS3） 

inline-flex：将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）





### 如何居中 div, 如何居中一个浮动元素? 

参考答案： 

(1) **非浮动元素居中：**可以设置 margin:0 auto 令其居中, 定位 ,父级元素 text-align:center 等等 

**(2) 浮动元素居中:** 

方法一:设置当前 div 的宽度，然后设置 margin-left:50%; position:relative; left:-250px;其中的 left 是宽度的一半。 

方法二:父元素和子元素同时左浮动，然后父元素相对左移动 50%，再然后子元 素相对左移动-50%。 

方法三:position 定位等等





### CSS 中 link 和@import 的区别是？

参考答案： 

（1）link 属于 HTML 标签，而@import 是 CSS 提供的; 

（2）页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面 

被加载完再加载;

（3）import 只在 IE5 以上才能识别，而 link 是 HTML 标签，无兼容问题; 

（4）link 方式的样式的权重 高于@import 的权重. 



### 请列举几种清除浮动的方法(至少两种)? 

**（1）父级 div 定义 height** 

原理：父级 div 手动定义 height，就解决了父级 div 无法自动获取到高度的问 题。

优点：简单、代码少、容易掌握 

缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级 div 不一样 时，会产生问题 

建议：不推荐使用，只建议高度固定的布局时使用 

**（2）结尾处加空 div 标签 clear:both** 

原理：添加一个空 div，利用 css 提高的 clear:both 清除浮动，让父级 div 能 自动获取到高度 

优点：简单、代码少、浏览器支持好、不容易出现怪问题 

缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空 div，让 人感觉很不好 

建议：不推荐使用，但此方法是以前主要使用的一种清除浮动方法 

**（3）父级 div 定义 伪类:after 和 zoom** 

原理：IE8 以上和非 IE 浏览器才支持:after，原理和方法 2 有点类似，zoom(IE 转有属性)可解决 ie6,ie7 浮动问题 

优点：浏览器支持好、不容易出现怪问题（目前：大型网站都有使用，如：腾迅， 网易，新浪等等） 

缺点：代码多、不少初学者不理解原理，要两句代码结合使用才能让主流浏览器都支持。 

建议：推荐使用，建议定义公共类，以减少 CSS 代码。 

**（4）父级 div 定义 overflow:hidden** 

原理：必须定义 width 或 zoom:1，同时不能定义 height，使用 overflow:hidden 时，浏览器会自动检查浮动区域的高度 

优点：简单、代码少、浏览器支持好 

缺点：不能和 position 配合使用，因为超出的尺寸的会被隐藏。 

建议：只推荐没有使用 position 或对 overflow:hidden 理解比较深的朋友使用。 

**（5）父级 div 定义 overflow:auto** 

原理：必须定义 width 或 zoom:1，同时不能定义 height，使用 overflow:auto 时，浏览器会自动检查浮动区域的高度 

优点：简单、代码少、浏览器支持好 

缺点：内部宽高超过父级 div 时，会出现滚动条。 

建议：不推荐使用，如果你需要出现滚动条或者确保你的代码不会出现滚动条就使用吧。 



### block，inline 和 inlinke-block 细节对比？  

**• display:block** 

a、block 元素会独占一行，多个 block 元素会各自新起一行。默认情况下，block 元素宽度自动填满其父元素宽度。 

b、block 元素可以设置 width,height 属性。块级元素即使设置了宽度,仍然是 独占一行。 

c、block 元素可以设置 margin 和 padding 属性。 

**• display:inline** 

a、inline 元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一 行排列不下，才会新换一行，其宽度随元素的内容而变化。

b、inline 元素设置 width,height 属性无效。 

c、inline 元素的 margin 和 padding 属性，水平方向的 padding-left, padding-right, margin-left, margin-right 都产生边距效果；但竖直方向的 padding-top, padding-bottom, margin-top, margin-bottom 不会产生边距效 果。

**• display:inline-block** 

a、简单来说就是将对象呈现为 inline 对象，但是对象的内容作为 block 对象呈 现。之后的内联对象会被排列在同一行内。比如我们可以给一个 link（a 元素） inline-block 属性值，使其既具有 block 的宽度高度特性又具有 inline 的同行特性。 

**补充说明** 

a、一般我们会用 display:block，display:inline 或者 display:inline-block 来调整元素的布局级别，其实 display 的参数远远不止这三种，仅仅是比较常用而已。 

b、IE（低版本 IE）本来是不支持 inline-block 的，所以在 IE 中对内联元素使 用display:inline-block，理论上IE是不识别的，但使用display:inline-block 在 IE 下会触发 layout，从而使内联元素拥有了 display:inline-block 属性的表象。



### 说说浮动元素会引起的问题和你的解决办法  

**问题：** 

（1）==父元素的高度无法被撑开==，影响与父元素同级的元素 

（2）与浮动元素同级的==非浮动元素会跟随其后== 

（3）若非第一个元素浮动，则==该元素之前的元素也需要浮动==，否则会影响页面 显示的结构 

**解决方法：** 

使用 CSS 中的 `clear:both;`属性来清除元素的浮动可解决问题(2)、(3)，对于问 题(1)，添加如下样式，给父元素添加 clearfix 样式： 

```CSS
.clearfix:after{ 
    content: "."; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden; 
}

.clearfix{ 
	display: inline-block; 
} /* for IE/Mac */ 
```

**清除浮动的几种方法：**

（1）额外标签法，`<div style="clear:both;"></div>`（缺点：不过这个办法会 增加额外的标签使 HTML 结构看起来不够简洁。） 

（2）使用 after 伪类 

```CSS
#parent:after{ 
    content:" "; 
    height:0; 
    visibility:hidden; 
    display:block; 
    clear:both; 
}
```

（3）浮动外部元素 

（4）设置`overflow`为`hidden`或者 auto
