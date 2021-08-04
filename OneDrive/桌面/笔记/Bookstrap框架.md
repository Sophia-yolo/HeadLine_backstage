[bootstrap | 博客自由标签](https://link.zhihu.com/?target=http%3A//www.w3cplus.com/blog/tags/126.html)

[玩转Bootstrap（基础）](https://link.zhihu.com/?target=http%3A//www.imooc.com/view/141)

[玩转Bootstrap（JS插件篇）](https://link.zhihu.com/?target=http%3A//www.imooc.com/view/262)



## 更容易理解的hello world

> ```
> <!DOCTYPE html>
> <html lang="en">
> <head>
> 	<meta charset="UTF-8">
> 	<link rel="stylesheet" href="[https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css](https://link.zhihu.com/?target=https%3A//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css)">
> 	<title>bootstrap起步</title>
> </head>
> <body>
> 	<button type="button" class="btn btn-success">hello world</button>
> </body>
> </html>
> ```

注：直接复制黏贴进一个html文件保存打开可以直接看到效果。用了CDN链接引用的是网上的bootstrap文件，无需下载。当然你也可以使用自己下载的bootstrap文件。

你并不需要写style样式只需要在html标签写一些class，因为一切样式都写在bootstrap(.min).css文件里面等着你去调用。这是bootstrap最大的特点。

选择器之间有个空格

```css
.btn .btn-success{....} 
```

选择器之间有逗号

```css
.btn,.btn-success{....} 
```

选择器挨在一起

```css
.btn.btn-success{....} 
```

## bootstrap响应式栅栏

响应式是bootstrap的最大卖点，能自适应各种屏幕大小不一设备。

**bootstrap版本的响应式栅栏系统**

![img](https://pic2.zhimg.com/v2-9b81e56b7b622e4c2decdd5a5d4fccc5_b.jpg)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<title>bootstrap起步</title>
</head>
<body>
	<div class="container-fluid">
		<div class="row" style="background: #DDD;padding: 20px 0;">
			<div class="col-xs-3 col-sm-5 col-md-6" style="background: #EEE">模块1</div>
  			<div class="col-xs-3 col-sm-5 col-md-6" style="background: #CCC">模块2</div>
		</div>
	</div>
</body>
</html>
```

**工作原理：**

- “行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中。
- 通过“行（row）”在水平方向创建一组“列（column）”。
- 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
- 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
- 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。

bootstrap把一行（row）的宽度平均分成了12分，假如你想让你的div的宽占四分之一的大小，那么其实就是十二分之三大小，用`<div class="col-xx-4">这是列（column）</div>`表示,里面的xx可以填xs,sm,md,lg。分别对应上图表4中屏幕尺寸。

**其实在bootstrap里面，你把各种屏幕尺寸需要的布局效果，填在一个同一个标签的同一个class并不会有任何冲突**，它会屏幕尺寸自动执行相应代码。你可以改变一下class里面数字并调整浏览器大小看看效果。

## 阅读bootstrap文档

这里我用 按钮组 为例，毕竟上面用了一个按钮例子。大类的导航在页面最上端，右边是更细的分类。通过这里可以更快的搜索到自己想要找的东西。



![img](https://pic4.zhimg.com/v2-95cbfca7f8a8cb95014009e8e204e5e3_b.jpg)

首先就是一个名字大标题；然后就是它的作用(有依赖JS会以链接挂在那里)，你可以看这里它判断功能是否是你需要的并选择是否使用；再然后就是注意事项，告诉你使用应该注意的规则避免出错。



![img](https://pic4.zhimg.com/v2-831d76f875ce228cf4eeed2458c40a27_b.jpg)

往下就是基本实例，有运行效果效果以及对应的代码。观察代码规律还是比较容易找到使用方法的。再往下就是一些拓展应用，不一一贴出来说了。当然有一些会依赖js插件。

```text
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<title>bootstrap起步</title>
</head>
<body>
	<div class="btn-group" role="group" aria-label="...">
	  <button type="button" class="btn btn-default">1</button>
	  <button type="button" class="btn btn-default">2</button>
	  <div class="btn-group" role="group">
	    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	      Dropdown
	      <span class="caret"></span>
	    </button>
	    <ul class="dropdown-menu">
	      <li><a href="#">Dropdown link</a></li>
	      <li><a href="#">Dropdown link</a></li>
	    </ul>
	  </div>
	</div>
<!-- 	<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"</script>
	<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
</body>
</html>
```

上面这段例子你会发现下拉按钮无法使用，那是因为它们依赖于js插件，插件被我注释掉了，删掉那个注释符号就可以正常使用。**特别提醒一下，组件的依赖关系一般在开头就有介绍并带有链接，但点击过去后显示的js并没有提供下载地址，其实所有bootstrap的js都已经在bootstrap.js里面，可以不管（这里有一些模块化知识，超纲我就不讲了）。同时bootstrap依赖于jquery，使用的时候必须像上一段代码那样jquery.js的位置先于bootstrap.js。**

很多时候我们使用了插件但我们并不需要去写js,当然它也提供一些js方法（科普一下，专业术语是接口，API等），让我们通过写js去控制它们，详细方法各有不同，不一一细说，学习一下看文档吧。