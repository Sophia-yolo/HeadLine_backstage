

### 2. 浏览器的内核分别是什么?经常遇到的浏览器的兼容性有哪些？原因，解决 方法是什么，常用 hack 的技巧 ？

内核：

1. IE：trident 内核 
2. Firefox：gecko 内核 
3. Safari: webkit 内核 
4. Opera: 以前是 presto 内核，Opera 现已改用 Google Chrome 的 Blink 内核 
5. Chrome:Blink(基于 webkit，Google 与 Opera Software 共同开发 )



兼容性问题：

- 浏 览 器 默 认 的 margin 和 padding 不 同 。 解决方案是加一个全局的 `*{margin:0;padding:0;}`来统一。  

- IE 下,可以使用获取常规属性的方法来获取自定义属性, 也可以使用 getAttribute()获取自定义属性; Firefox 下,只能使用 getAttribute()获取自定义属性。

> 解决方法:统一通过 getAttribute()获取自定义属性

- IE 下,even 对象有 x,y 属性,但是没有 pageX,pageY 属性; Firefox 下,event 对象有 pageX,pageY 属性,但是没有 x,y 属性. （条件注释）缺点是在 IE 浏览器下可能会增加额外的 HTTP 请求数。 

- Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 `-webkit-text-size-adjust: none;` 解决

- 超链接访问过后 hover 样式就不出现了 被点击访问过的超链接样式不在具有 hover 和 active 了。解决方法是改变 CSS 属性的排列顺序: L-V-H-A : `a:link {} a:visited {} a:hover {} a:active {}` 



### 3. 介绍一下你对浏览器内核的理解？ 

参考答案: 

主要分成两部分：渲染引擎(layout engineer 或 

Rendering Engine)和 JS 引擎。

**渲染引擎：**负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加 

入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器 

的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网 

页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要 

内核。 

**JS 引擎：**解析和执行 javascript 来实现网页的动态效果。 

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核 

就倾向于只指渲染引擎。





### 4. WebSocket 与消息推送？ 

B/S (Brower/Server) 架构的系统多使用 HTTP 协议， 

HTTP 协议的特点： 

1. 无状态协议 
2. 用于通过 Internet 发送请求消息和响应消息 
3. 使用端口接收和发送消息，默认为 80 端口 底层通信还是使用 Socket 完成。 

HTTP 协议决定了服务器与客户端之间的连接方式，无法直接实现消息推送（F5 已坏）

一些变相的解决办法： 双向通信与消息推送 

**轮询：**客户端定时向服务器发送 Ajax 请求，服务器接到请求后马上返回响应信 息并关闭连接。 

> 优点：后端程序编写比较容易。 
>
> 缺点：请求中有大半是无用，浪费带宽和服务器资源。 
>
> 实例：适于小型应用。

前端实现：

```js
var xhr = new XMLHttpRequest();    
  setInterval(function(){        
    xhr.open('GET','/user');        
    xhr.onreadystatechange = function(){  
      ajax()    
     };       
    xhr.send();    
  },1000)
```

**长轮询：**客户端向服务器发送 Ajax 请求，服务器接到请求后 hold 住连接， 直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。 

> 优点：在无消息的情况下不会频繁的请求，耗费资小。 
>
> 缺点：服务器 hold 连接会消耗资源，返回数据顺序无保证，难于管理维护。
>
> 实例：WebQQ、Hi 网页版、Facebook IM。 

**长连接：**在页面里嵌入一个隐蔵 iframe，将这个隐蔵 iframe 的 src 属性设为对 一个长连接的请求或是采用 xhr 请求，服务器端就能源源不断地往客户端输入数 据。

> 优点：消息即时到达，不发无用请求；管理起来也相对便。 
>
> 缺点：服务器维护一个长连接会增加开销。 
>
> 实例：Gmail 聊天 

**Flash Socket：**在页面中内嵌入一个使用了 Socket 类的 Flash 程序 JavaScript 通过调用此 Flash 程序提供的 Socket 接口与服务器端的 Socket 接口进行通信，JavaScript 在收到服务器端传送的信息后控制页面的显示。 

> 优点：实现真正的即时通信，而不是伪即时。 
>
> 缺点：客户端必须安装 Flash 插件；非 HTTP 协议，无法自动穿越防火墙。 
>
> 实例：网络互动游戏。 

**Websocket:** WebSocket 是 HTML5 开始提供的一种浏览器与服务器间进行全双工通讯的网络技 术。依靠这种技术可以实现客户端和服务器端的长连接，双向实时通信。 

> 特点：
>
> > 1. 事件驱动 
> > 2. 异步 
> > 3. 使用 ws 或者 wss 协议的客户端 socket 
> > 4. 能够实现真正意义上的推送功能
>
> 缺点：少部分浏览器不支持，浏览器支持的程度与方式有区别。





### 项目的同源处理，跨越相关 

**什么是跨域**？

跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的==同源策略==造成的， 是浏览器对 JavaScript 实施的安全限制。 

**什么是同源策略**？ 

同源策略（Same origin policy）是一种约定，同源策略是浏览器的行为，是为了保护本地数据不被 JavaScript 代码获取回来 的数据污染

因此拦截的是客户端发出的请求回来的数据接收，即请求发送了， 服务器响应了，但是无法被浏览器接收。 

其主要限制以下几个方面： 

a.== Cookie 、LocalStorage 和 IndexDB ==无法读取 

b. 无法获取或操作==另一个资源的 DOM== 

c. AJAX 请求不能发送 

同源，就是指两个页面具有相同的协议，主机（域名），端口

常见跨域方案 ：

a. 通过 jsonp 跨域 

b. document.domain+iframe 跨域 

c. location.hash \+ iframe 

d. window.name + iframe 跨域 

e. postMessage 跨域 

f. 跨域资源共享（CORS） 

g. nginx 代理跨域 

h. nodejs 中间件代理跨域 

i. WebSocket 协议跨域 

