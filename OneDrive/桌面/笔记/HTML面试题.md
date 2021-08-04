### 1. 浏览器页面有哪三层构成，分别是什么，作用是什么?

 构成：结构层、表示层、行为层

分别：HTML、CSS、JavaScript

作用：HTML实现页面的结构、CSS完成页面的表现与风格、JavaScript实现一些客户端的功能与业务



### 2. Doctype 作用? 严格模式与混杂模式如何区分？它们有何意义?

作用：DOCTYPE 声明位于文档中的最前面的位置，处于 html 标签之前。此标签可告知浏览器文档使用哪种 HTML 或  XHTML 规范。（重点：告诉浏览器按照何种规范解析页面）

标准模式：严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。

混杂模式：在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作

> DOCTYPE 不存在或格式不正确会导致文档以混杂模式呈现。



### 3.  HTML 与 XHTML——二者有什么区别？

1. 所有的标记都必须要有一个相应的结束标记 
2. 所有标签的元素和属性的名字都必须使用小写 
3. 所有的 XML 标记都必须合理嵌套 
4. 所有的属性必须用引号 "" 括起来 
5. 把所有 < 和 & 特殊符号用编码表示 
6. 给所有属性赋一个值 
7. 不要在注释内容中使用 "--" 
8. 图片必须有说明文字





### 4. 你如何理解 HTML 结构的语义化？ 

**什么是 HTML 语义化？**

基本上都是围绕着几个主要的标签，像标题（ H1~H6 ）、列表（ li ）、 强调（ strong 、em ）等等 。根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。

**为什么要语义化？** 

1. 为了在没有 CSS 的情况下，页面也能呈现出很好地内容结构、代码结构 : 为 了裸奔时好看； 
2. 用户体验：例如 title、 alt 用于解释名词或解释图片信息、 label 标签的活用； 
3. 有利于 SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫 依赖于标签来确定上下文和各个关键字的权重； 
4. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲 染网页； 
5. 便于团队开发和维护，语义化更具可读性，是下一步网页的重要动向，遵循 W3C 标准的团队都遵循这个标准，可以减少差异化。

**语义化标签** 

`<header></header>` 

`<footer></footer>` 

`<nav></nav>` 

`<section></section>` 

`<article></article>` 	SM:用来在页面中表示一套结构完整且独立的内容部分 

`<aside></aside>` 

SM:主题的附属信息(用途很广，主要就是一个附属内容)，如果 article 里面为 一篇文章的话，那么文章的作者以及信息内容就是这篇文章的附属内容了 

`<figure></figure>` 	SM:媒体元素，比如一些视频，图片啊等等

`<datalist></datalist>` 	SM:选项列表，与  input 元素配合使用，来定义 input 可能的值 

`<details></details>` SM:用于描述文档或者文档某个部分的细节，默认属性为 open 

>  ps:配合 summary 一起使用  



### 4. 谈谈以前端角度出发做好 SEO 需要考虑什么？

a. 了解搜索引擎如何抓取网页和如何索引网页

b. meta标签优化：主要包括主题（Title)，网站描述(Description)，和关键词（Keywords）。还有一些其它的隐藏文字比如 Author（作者），Category（目录），Language（编码语种）等

c. 关键词分析：首先要给网站确定主关键词（一般在 5 个上下），然后针对这些关键词进行优化，包括关键词密度（Density），相关度（Relavancy），突出性（Prominency）等等。

d. 付费给搜索引擎

e. 链接交换和链接广泛度（Link Popularity）

f. 合理的标签使用





### 说说你对 HTML5 认识?（是什么,为什么）  

**是什么：** 

HTML5 指的是包括 ==HTML、CSS 和 JavaScript== 在内的一套技术组合。它希望能够==减少网页浏览器对于需要插件的丰富性网络应用服务==（Plug-in-Based Rich Internet Application，RIA），例如：AdobeFlash 、Microsoft Silverlight 与 Oracle JavaFX 的需求，并且提供更多能有效==加强网络应用==的标准集。HTML5 是 HTML 最新版本，2014 年 10 月由万维网联盟（W3C）完成标准制定。目标是替 换 1999 年所制定的 HTML4.01 和 XHTML 1.0 标准，以期能在互联网应用迅速发展 的时候，使网络标准达到匹配当代的网络需求。 

**为什么：** 

HTML4 陈旧不能满足日益发展的互联网需要，特别是==移动互联网==。为了增强浏览 器功能 Flash 被广泛使用，但安全与稳定堪忧，不适合在移动端使用（耗电、触 摸、不开放）。 HTML5 增强了浏览器的原生功能，符合 HTML5 规范的浏览器功能将更加强大，减 少了 Web 应用对插件的依赖，让用户体验更好，让开发更加方便，另外 W3C 从推 出 HTML4.0 到 5.0 之间共经历了 17 年，HTML 的变化很小，这并不符合一个好产 品的演进规则。 



### 对 WEB 标准以及 W3C 的理解与认识? 

标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外链 css 和 js 脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用 户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维护、改版 方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性。







### HTML 全局属性(global attribute)有哪些? 

**class**：为元素设置类标识，多个类名用空格分开，CSS和javascript可通过class 属性获取元素; 

**lang:** 元素内容的的语言 spellcheck: 是否启动拼写和语法检查 

**style:** 行内 css 样式 

**title**： 元素相关的建议信息; 

**accesskey**：设置快捷键，提供快速访问元素如 aaa 在 windows 下的 firefox 中按 alt + shift + a 可激活元素; 

**contenteditable**： 指定元素内容是否可编辑; 

**contextmenu:** 自定义鼠标右键弹出菜单内容 data-*: 为元素增加自定义属性; 

**dir:** 设置元素文本方向; 

**draggable:** 设置元素是否可拖拽; 

**dropzone:** 设置元素拖放类型： copy, move, link hidden: 表示一个元素是否 与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果 id: 元 素 id，文档内唯一; 

**tabindex:** 设置元素可以获得焦点，通过 tab 可以导航;

**translate**： 元素和子孙节点内容是否需要本地化;





### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

（1）CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认 

的 display 值，比如 div 默认 display 属性值为“block”，成为“块级”元素；span 默认 

display 属性值为“inline”，是“行内”元素。 

（2）行内元素：a b em span i  small  img input span select strong（强调的语气） u  br  sub  sup  label  textarea  font

> i 标签和 em 标签 有语义，b 标签和 strong 标签 无语义。

块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p  hr  menu  table  noframes  noscript  form  fieldset  pre  hgroup  blockquote  cite

（3）可变元素 ：可变元素为根据上下文语境决定该元素为块元素或者内联元素。 

applet	button	del	iframe(inline frame)	ins(插入的文本)	map(图片区块)

object(object 对象)	script(客户端脚本 )

> （4）( 在 HTML[1] 元素中，没有内容的 HTML 元素被称为空元素 ) 

​			知名的空元素： br	hr	img	input  link	meta

​			鲜为人知的是： area	base	col	command	embed	keygen	param	source	track	wbr



### 行内元素和块级元素的具体区别是什么？行内元素的 padding 和 margin 可设置吗？ 

块级元素(block)特性： 

1. 总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示; 
2. 宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制; 

内联元素(inline)特性： 

1. 和相邻的内联元素在同一行; 
2. 宽度(width)、高度(height)、内边距的 top/bottom(padding-top/padding-bottom) 和外边距的top/bottom(margin-top/margin-bottom)都不可改变（也就是padding和margin 的 left 和 right 是可以设置的），就是里面文字或图片的大小。 

那么问题来了，浏览器还有默认的天生 inline-block 元素（拥有内在尺寸，可设置高宽，但不会自动换行），有哪些？ 

答案：<input> 、<img> 、<button> 、<textarea> 、<label>





### link 和@import 的区别?

link 引入：

```html
<link rel='stylesheet' rev='stylesheet' href='CSS 文件' type='text/css' media='all' /> 
```

@import引入：

```css
<style type='text/css' media='screen'> @import url('CSS 文件 '); </style>
```



两者都是外部引用 CSS 的方式，但是存在一定的区别： 

区别 1： link 是 ==XHTML 标签==，除了加载 CSS 外，还可以定义 RSS 等其他事务； @import ==属于 CSS 范畴==，只能加载CSS 。 

区别 2： link 引用 CSS 时，在==页面载入时同时加载==； @import ==需要页面网页 完全载入以后加载==。 

区别 3： link 是 XHTML 标签，==无兼容问题==； @import 是在 CSS2.1 提出的， 低版本的浏览器不支持。 

区别 4： link ==支持使用 Javascript 控制 DOM 去改变样式==；而 @import 不支 持。



### 说说 iframe 的优缺点 

**iframe 的优点**： 

1. iframe 能够原封不动地把==嵌入的网页展现==出来。 
2. 如果有多个网页调用 iframe，只需要修改 iframe 的内容，就可以实现对调用 iframe 的每一个页面内容的更改，方便快捷。 
3. 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用 iframe 来嵌套，可以增加==代码的可重用性==。 
4. 如果遇到加载缓慢的第三方内容，如图标和广告等，可以用 iframe 来解决。 

**iframe 的缺点**： 

1. 会产生很多页面，不容易管理。 
2. 在几个框架中都出现上下、左右滚动条时，这些滚动条除了会挤占已经非常 有限的页面空间外，还会分散访问者的注意力。 
3. 使用框架结构时，必须保证正确设置所有的导航链接，否则会给访问者带来很大的麻烦。比如被链接的页面出现在导航框架内，这种情况下会导致链接死循环。 
4. 很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。 
5. iframe 框架页面会增加服务器的 http 请求，对于大型网站是不可取的。

(1) iframe 会阻塞主页面的 Onload 事件； 

(2) 搜索引擎的检索程序无法解读这种页面，不利于 SEO; 

(3) iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响 页面的并行加载。 

使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通 过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题。



### 说说超链接 target 属性的取值和作用？ 

target 这个属性指定所链接的页面在浏览器窗口中的打开方式。 

它的参数值主要有： 

1. _blank：在新浏览器窗口中打开链接文件； 
2. _parent ：将链接的文件载入含有该链接框架的父框架集或父窗口中。如果 含有该链接的框架不是嵌套的，则在浏览器全屏窗口中载入链接的文件，就象 _self 参数一； 
3. _self：在同一框架或窗口中打开所链接的文档。此参数为默认值，通常不用 指定。但是我不太理解； 
4. _top：在当前的整个浏览器窗口中打开所链接的文档，因而会删除所有框架； 



### `data-`属性的作用是什么？ 

`data-`为 H5 新增的为前端开发者提供自定义的属性，这些属性集可以通过对象 的`dataset`属性获取，不支持该属性的浏览器可以通过`getAttribute`方法获取，需要注意的是：`data-`之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。所有主流浏览器都支持 data-* 属性。 即：当没有合适的属性和元素时，自定义的 data 属性是能够存储页面或 App 的私有的自定义数据。



### Label 的作用是什么，是怎么用的？ 

label 标签来==定义表单控制间的关系== , 当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。 

```html
<label for='Name'>Number:</label> 
<input type=“ text “ name='Name' id='Name'/> 

<label>Date:<input type='text' name='B'/></label> 
```

注意:label 的 ==for 属性值==要与后面对应的 input ==标签 id 属性值==相同 



### title 与 h3 的区别、b 与 strong 的区别、i 与 em 的区别？

1. title 属性没有明确意义==只表示是个标题==，H1 则表示==层次明确==的标题，对页面信息的抓取也有很大的影响； 

2.  strong 是标明重点内容，有语气加强的含义，使用阅读设备阅读网时： <strong>会重读，而<B>是展示强调内容。 

3.  i 内容展示为斜体，em 表示强调的文本； 

4. strong:粗体强调标签，强调，表示内容的重要性 

   em:斜体强调标签，更强烈强调，表示内容的强调点 

> Physical Style Elements -- 自然样式标签 ：b, i, u, s, pre 
>
> Semantic Style Elements \-- 语义样式标签 ：strong, em, ins, del, code 

应该准确使用语义样式标签,但不能滥用,如果不能确定时首选使用自然样式标 签。



### img 的 title 和 alt 有什么区别？ 

Alt 用于图片无法加载时显示 Title 为该属性提供信息，通常当鼠标滑动到元素上的时候显示。



### 简述一下 src 与 href 的区别。 

1. src 用于==替换当前元素==，href 用于在==当前文档和引用资源之间==确立联系。 
2. src 是 source 的缩写，指向==外部资源的位置==，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片 和 frame 等元素。 
3. 当浏览器解析到`<script src =”js.js"></script>` 时，会==暂停其他资源的下载和处理==，直到将该资源加载、编译、执行 完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。
4. href 是 Hypertext Reference 的缩写，指向==网络资源所在位置==，建立和当前元素（锚点） 或当前文档（链接）之间的链接，如果我们在文档中添加 `<link href="common.css" rel="stylesheet"/>` 那么浏览器会识别该文档为 css 文件，就会并行下载资源并且不会停止对当前文档的处理。 这也是为什么建议使用 link 方式来加载 css，而不是使用@import 方式。



### 表单的基本组成部分有哪些，表单的主要用途是什么？ 

组成：表单标签、表单域、表单按钮 

a、表单标签：这里面包含了处理表单数据所用 CGI 程序的 URL,以及数据提交到 服务器的方法。 

b、表单域：包含了文本框、密码框、隐藏域、多行文本框、复选框、单选框、 下拉选择框、和文件上传框等。 

c、表单按钮：包括提交按钮，复位按钮和一般按钮；用于将数据传送到服务器 上的 CGI 脚本或者取消输入，还可以用表单按钮来控制其他定义了处理脚本的处 理工作。 

主要用途：表单在网页中主要负责数据采集的功能，和向服务器传送数据。





### 表单提交中 Get 和 Post 方式的区别？ 

http 定义与服务器的四种基本方法，增删改查（put 、delete、post、get）

1. get 是从服务器上获取数据，post 是向服务器传送数据。 
2. get 是把参数数据队列加到提交表单的 ACTION 属性所指的 URL 中，值和表单内各个字段一一对应，在 URL 中可以看到。post 是通过 HTTP post 机制，将 表单内各个字段与其内容放置在 HTML HEADER 内一起传送到 ACTION 属性所指的 URL 地址,用户看不到数据内容。 
3. 对于 get 方式，服务器端用 Request.QueryString 获取变量的值，对于 post 方式，服务器端用 Request.Form 获取提交的数据。 
4. get 传送的数据量较小，不能大于 2KB。post 传送的数据量较大，一般被默认为不受限制。但理论上，IIS4 中最大量为 80KB，IIS5 中为 100KB 
5. get 安全性低，post 安全性较高





### HTML5 的优点与缺点？ 

**优点：** 

a、网络标准统一、HTML5 本身是由 W3C 推荐出来的。 

b、多设备、跨平台 

c、即时更新。 

d、提高可用性和改进用户的友好体验；

e、有几个新的标签，这将有助于开发人员定义重要的内容； 

f、可以给站点带来更多的多媒体元素(视频和音频)； 

g、可以很好的替代 Flash 和 Silverlight； 

h、涉及到网站的抓取和索引的时候，对于 SEO 很友好； 

i、被大量应用于移动应用程序和游戏。 

**缺点：** 

a、安全：像之前 Firefox4 的 web socket 和透明代理的实现存在严重的安全问 题，同时 web storage、web socket 这样的功能很容易被黑客利用，来盗取用 户的信息和资料。 

b、完善性：许多特性各浏览器的支持程度也不一样。 

c、技术门槛：HTML5 简化开发者工作的同时代表了有许多新的属性和 API 需要 开发者学习，像 web worker、web socket、web storage 等新特性，后台甚至 浏览器原理的知识，机遇的同时也是巨大的挑战 

d、性能：某些平台上的引擎问题导致 HTML5 性能低下。 

e、浏览器兼容性：最大缺点，IE9 以下浏览器几乎全军覆没。



### HTML5 有哪些新特性、移除了哪些元素？ 

Html5 新增了 27 个元素，废弃了 16 个元素，根据现有的标准规范，把 HTML5 的元素按优先级定义为结构性属性、级块性元素、行内语义性元素和交互性元素 4 大类。 

结构性元素主要负责 web 上下文结构的定义： 

**section：**在 web 页面应用中，该元素也可以用于区域的章节描述。

**header：**页面主体上的头部， header 元素往往在一对 body 元素中。 

**footer：**页面的底部（页脚），通常会标出网站的相关信息。 

**nav：**专门用于菜单导航、链接导航的元素，是 navigator 的缩写。 

**article：**用于表现一篇文章的主体内容，一般为文字集中显示的区域。 级块性元素主要完成 web 页面区域的划分，确保内容的有效分割。 

**aside：**用于表达注记、贴士、侧栏、摘要、插入的引用等作为补充主体的内容。 

**figure：**是对多个元素进行组合并展示的元素，通常与 ficaption 联合使用。 

**code：**表示一段代码块。 

**dialog：**用于表达人与人之间的对话，该元素包含 dt 和 dd 这两个组合元 素， dt 用于表示说话者，而 dd 用来表示说话内容。 行内语义性元素主要完成 web 页面具体内容的引用和描述，是丰富内容展示的基 础。

**meter：**表示特定范围内的数值，可用于工资、数量、百分比等。 

**time：**表示时间值。 

**progress：**用来表示进度条，可通过对其 max 、 min 、 step 等属性进 行控制，完成对进度的表示和监事。 

**video：**视频元素，用于支持和实现视频文件的直接播放，支持缓冲预载和多种 视频媒体格式。 

**audio：**音频元素，用于支持和实现音频文件的直接播放，支持缓冲预载和多种 音频媒体格式。 交互性元素主要用于功能性的内容表达，会有一定的内容和数据的关联，是各种 事件的基础。 

**details：**用来表示一段具体的内容，但是内容默认可能不显示，通过某种手段 （如单击）与 legend 交互才会显示出来。 

**datagrid：**用来控制客户端数据与显示，可以由动态脚本及时更新。

**menu：**主要用于交互菜单（曾被废弃又被重新启用的元素）。 

**command：**用来处理命令按钮



废弃：

frame 

frameset 

noframe 

applet 

big 

center 

basefront



### HTML5 标签的作用?(用途) 

a、使 Web 页面的内容更加有序和规范； 

b、使搜索引擎更加容易按照 HTML5 规则识别出有效的内容； 

c、使 Web 页面更接近于一种数据字段和表； 



### HTML5 标准提供了哪些新的 API？ 

参考答案： 

HTML5 提供的应用程序 API 主要有： 

- Media API 
- Text Track API 
- Application Cache API 
- User  Interaction 
- Data Transfer API 
- Command API 
- Constraint Validation API 
- History API 



### HTML5 Canvas 元素有什么用？ 

> canvas 是 ==HTML5 中新增==一个 HTML5 标签与操作 canvas 的 javascript API，它可以实现在网页中完成==动态的 2D 与 3D 图像技术==。标记和 SVG 以及 VML 之间的一 个重要的不同是，有一个基于 JavaScript 的绘图 API，而 SVG 和 VML 使用一 个 XML 文档来描述绘图。SVG 绘图很容易编辑与生成，但功能明显要弱一些。 canvas 可以完成动画、游戏、图表、图像处理等原来需要 Flash 完成的一些功 能。

Canvas 元素用于在网页上==绘制图形==，该元素标签强大之处在于可以直接在 HTML 上进行图形操作， 

```html
<canvas id=“canvas1” 

width=“300” height=“100”> 

</canvas>
```



### 除了 audio 和 video，HTML5 还有哪些媒体标签？ 

HTML5 对于多媒体提供了强有力的支持，除了 audio 和 video 标签外，还支持以 下标签： 

<embed>标签定义嵌入的内容，比如插件。 

```
<embed type="video/quicktime" src="Fishing.mov"> 
```

<source>对于定义多个数据源很有用。 

```html
<video width=“450” height=“340” controls>
	<source src=“jamshed.mp4” type=“video/mp4”> 
	<source src=“jamshed.ogg” type= “video/ogg”> 
</video>
```

<track>标签为诸如 video 元素之类的媒介规定外部文本轨道。用于规定字幕文 

件或其他包含文本的文件，当媒介播放时，这些文件是可见的。 

```
<video width=“450” height=“340” controls> 
	<source src=“jamshed.mp4” type=“video/mp4”> 
	<source src=“jamshed.ogg” type= “video/ogg”> 
	<track kind=“subtitles” label=“English” src= “jamshed_en.vtt” srclang=“en” default></track> 	<track kind=“subtitles” label=“Arabic” src= “jamshed_ar.vtt” srclang=“ar”></track> 
</video>
```





### HTML5 中如何嵌入视频？

### HTML5 中如何嵌入音频？



### HTML5 存储类型有什么区别？  

HTML5 能够本地存储数据，在之前都是使用 cookies 使用的。

HTML5 提供了下面两种本地存储方案： 

1. localStorage 用于持久化的本地存储，数据永远不会过期，关闭浏览器也不会丢失。 
2. sessionStorage 同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage 不是一种持久化的本地存储，仅仅是会话级别的存储



### 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

区别： 

1. Cookie 

   每个域名存储量比较小（各浏览器不同，大致 4K ） 

   所有域名的存储量有限制（各浏览器不同，大致 4K ） 

   有个数限制（各浏览器不同） 

   会随请求发送到服务器 

2. LocalStorage 

   永久存储 

   单个域名存储量比较大（推荐 5MB ，各浏览器不同） 

   总体数量无限制 

3. SessionStorage 

   只在 Session 内有效 ，会话级别的存储

   存储量更大（推荐没有限制，但是实际上各浏览器也不同）



Microsoft 指出 Internet Explorer 8 增加 cookie 限制为每个域名 50 个，但 IE7 似乎也允许每个域名 50 个 cookie。Firefox 每个域名 cookie 限制为 50 个。Opera每个域名 cookie 限制为 30 个。 Firefox 和 Safari 允许 cookie 多达 4097 个字节，包括名（name）、值（value）和等号。Opera 许 cookie 多达 4096 个字节，包括：名（name）、值（value）和等号。Internet Explorer 允许 cookie 多达 4095 个字节，包括：名（name）、值（value）和等号。 



**webstorage 和 cookie 的区别** ：

WebStorage 的概念和 cookie 相似，区别是它是为了==更大容量存储设计==的。Cookie 的==大小是受限==的，并且每次你请求一个新的页面的时候 Cookie 都会被发送过去，这样无形中浪费 了带宽，另外 cookie 还需要==指定作用域==，不可以跨域调用。 除此之外，Web Storage ==拥有 setItem,getItem,removeItem,clear 等方法==，不像 cookie 需要前端开发者自己封装 setCookie，getCookie。但是 Cookie 也是不可以或缺的：Cookie 的作用是==与服务器进行交互==，作为 HTTP 规范的一部分而存在 ，而 Web Storage ==仅仅是为 了在本地“存储”数据而生==。



sessionStorage 和 localStorage 是 HTML5 Web Storage API 提供的，可以方便的在web 请求之间保存数据。有了本地数据，就可以避免数据在浏览器和服 务器间不必要地来回传递。sessionStorage、 localStorage 、 cookie 都是在 浏览器端存储的数据，其中 sessionStorage 的概念很特别，引入了一个==“浏览器窗口”==的概念。sessionStorage 是在同源的同窗口（或 tab ）中，始终存在的数据。也就是说==只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一 页面，数据仍然存在。关闭窗口后， sessionStorage 即被销毁==。同时“独立” 打开的不同窗口，即使是同一页面， sessionStorage 对象也是不同的 cookies 会发送到服务器端。其余两个不会。 而 localStorage 用于==持久化的本地存储==，除非主动删除数据，否则 数据是永远不会过期的。



### HTML5 应用程序缓存和浏览器缓存有什么区别？ 

应用程序缓存是 HTML5 的重要特性之一，提供了==离线使用==的功能，让应用程序 可以获取本地的网站内容，例如 HTML 、CSS 、图片以及 JavaScript。这个特性可以==提高网站性能==，它的实现借助于 manifest 文件，如下： 

```html
<!doctype html> 
<html manifest="example.appcache"> 
	….. 
</html> 
```

与传统浏览器缓存相比，它==不强制用户访问的网站内容被缓存==。

















### 说说你对 SVG 理解? 

SVG 可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言（XML）， 用于描述二维矢量图形的一种图形格式。SVG 严格遵从 XML 语法，并用文本格 式的描述性语言来描述图像内容，因此是一种和图像分辨率无关的矢量图形格 式。SVG 于 2003 年 1 月 14 日成为 W3C 推荐标准。 

特点： 

1. 任意放缩 ：用户可以任意缩放图像显示，而不会破坏图像的清晰度、细节等。 

2. 文本独立：SVG 图像中的文字独立于图像，文字保留可编辑和可搜寻的状态。也不会再有字 体的限制，用户系统即使没有安装某一字体，也会看到和他们制作时完全相同的画面。 

3. 较小文件 ：总体来讲，SVG 文件比那些 GIF 和 JPEG 格式的文件要小很多，因而下载也很快。 

4. 超强显示效果 ：SVG 图像在屏幕上总是边缘清晰，它的清晰度适合任何屏幕分辨率和打印分辨 率。

5. 超级颜色控制 ：SVG 图像提供一个 1600 万种颜色的调色板，支持 ICC 颜色描述文件标准、RGB、 线 X 填充、渐变和蒙版。 

6. 交互 X 和智能化。SVG 面临的主要问题一个是如何和已经占有重要市场份额 的矢量图形格式 Flash 竞争的问题，另一个问题就是 SVG 的本地运行环境下的厂 家支持程度。 

   > 浏览器支持： 
   >
   > Internet Explorer9，火狐，谷歌 Chrome，Opera 和 Safari 都支持 SVG。 
   >
   > IE8 和早期版本都需要一个插件-如 Adobe SVG 浏览器，这是免费提供的。





### 为什么利用多个域名来存储网站资源会更有效？ 

1. CDN 缓存更方便 
2. 突破浏览器并发限制 
3. 节约 cookie 带宽 
4. 节约主域名的连接数，优化页面响应速度 
5. 防止不必要的安全问题





### **知道的网页制作会用到的图片格式有哪些？** 

png-8，png-24，jpeg，gif，svg，Webp。 

> 科普一下 Webp：WebP 格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。 图片压缩体积大约只有 JPEG 的 2/3，并能节省大量的服务器带宽资源和数据空间。Facebook Ebay 等知名网站已经开始测试并使用 WebP 格式。 在质量相同的情况下，WebP 格式图像的体积要比 JPEG 格式图像小 40%





### 一个页面上有大量的图片（大型电商网站），加载很慢，你有哪些方法优化这些图片的加载，给用户更好的体验。

1. 图片懒加载：在页面上的未可视区域可以添加一个滚动条事件，判断图片位置与浏览器顶端 的距离与页面的距离，如果前者小于后者，优先加载。 
2. 如果为幻灯片、相册等，可以使用图片预加载技术，将当前展示图片的前一张和后一张优先下载。 
3. 如果图片为 css 图片，可以使用 CSSsprite，SVGsprite，Iconfont、Base64 等技术。 
4. 如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图， 以提高用户体验。 
5. 如果图片展示区域小于图片的真实大小，则因在服务器端根据业务需要先行进行图片压缩， 图片压缩后大小与展示一致。





### px 和 em 的区别。 

px 和 em 都是长度单位，区别是，px 的值是固定的，指定是多少就是多少，计算比较容易。 

em 得值不是固定的，并且 em 会继承父级元素的字体大小。 

浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 

10px=0.625em。





















