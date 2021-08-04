```js
(function( window,undefined){
    var njQuery = function(selector){
		return new njQuery.prototype.init(selector)
    }
    njQuery.prototype = {
        constructor: njQuery,
        init: function(selector){
            //去除字符串两端空格
            selector = njQuery.trim(selector)
            //'' null undefined NaN 0 false传入
			if(!selector){
				return this	
             }
            else if(njQuery.isFunction(selector)) {
                njQuery.ready(selector)
            }
            //传入字符串
            else if (njQuery.isString(selector)){
                //判断是否是代码片段
                if(njQuery.isHTML(selector)){
                    var temp = document.creatElement("div")
                    temp.innerHTML = selector;
                    //通过[].push找到数组中的push方法
                    //通过apply(this,temp.children)将找到的push方法内部的this修改为自定义的对象
                    //将传入数组中对的元素一次取出，传递给形参
                    [].push.apply(this,temp.children)
                    return this
                }
                //判断是否是选择器
                else {
                    //根据传入的选择器找到对应的元素
                    var res = document.querySelectorAll(selector);
                    //将找到的与阿奴是添加到njQuery上
                    [].push.apply(this,res)
                    //返回加工好的this
                    return this
                }
            }
            //数组
            else if (njQuery.isArray(selector)) {
                var arr = [].slice.call(selector);
                [].push.apply(this.arr)
                return this
            }
            //除上述类型外
            else {
                this[0] = selector
                this.length = 1
                return this
            }
        },
    	njQuery : "1.1.0",
        selector : "",
        length : 0,
        push : [].push,
        sort : [].sort,
        splice :[].splice,
        toArray : function(){
            return [].slice.call(this)
        },
        get : function(num) {
            if(argument.length === 0){
                return this.toArray()
            }
            else if(num >= 0){
                return this[num]
            }
            else{
                return this[this.length + num]
            }
        },
        eq : function(num){
            //没有传递参数
            if(argument.length === 0){
                return new njQuery()
            }
            //传递非负数yu负数
            else {
                return njQuery(this.get(num))
            }
        },
        first : function(){
            return this.eq(0)
        },
        last : function(){
            return this.eq(-1)
        },
        each : function(fn){
            njQuery.each(this,fn)
        }
    }
 	njQuery.extend = njQuery.prototype.extend = function(obj) {
    	for(var key in obj){
            this[key] = obj[key]
        }
	}
 	njQuery.extend({
 		isString : function(str) {
            return typeof str ==="string"
        },
        isHTML : function(str) {
            return str.charAt(0) == "<" && str.cahrAt(str.length - 1) == ">" && str.length >=3;
        },
        trim : function(str){
            if(!njQuery.isString(str)) {
                return str 
            }
            if(str.trim) {
                return str.trim()
            } else {
                return str.replace(/^\s+|\s+$/g,"")
            }
        },
        isObject : function(sele) {
            return typeof sele === "object" 
        },
        isWindow : function(sele) {
            return sele === window
        },
        isArray : function(sele) {
            if(njQuery.isObject(sele) && !njQuery.isWindow(sele) && "length" in sele){
                return true
            }
        },
        isFunction : function(sele) {
            return typeof sele === "function"
        },
        ready : function(fn) {
            if(document.readyState == "complete"){
                fn()
            }else if (document.addEventListener){
                document.addEventListener('DOMContentLoaded',function(){
                    fn() 
                })
            }
    else {
				document.attachEvent('onreadystatechange',function(){
                    if(document.readyState == "complete"){
                       fn() 
                    }
                })
            }
        },
        each : function(obj,fn) {
            //判断是否为数组
            if(njQuery.isArray(obj)){
                for(var i = 0;i < obj.length; i++){
					var res = fn.call(obj[i],i,obj[i])
                    if(res === true){
                        continue
                    }else if(res === false){
                        break
                    }
                }
            }
            //判断是否为对象
            else if(njQuery.isObject(obj)){
                for(var key in obj){
                    var res = fn.call(obj[key],key,obj[key])
                    if(res === true){
                        continue
                    }else if(res === false){
                        break
                    }
                }
            }
        }
	})
    njQuery.prototype.init.prototype = njQuery.prototype
    window.njQuery = window.$ =njQuery
})(window)
```

tip：

1. apply 和call 方法的作用：专门用于修改内部的this

   > 格式：
   >
   > - call（对象，参数1，参数2，……）
   > - apply（对象，`[数组]`）

2. slice()

   > 如果slice方法什么参数都没有传递，会将数组中的元素怒放到一个新的数组中原样返回

3. 真数组转换为伪数组：[].push.apply(obj,arr)

4. 伪数组转换为真数组：[].slice.call(obj)

5. each 和 map 静态方法的区别

   > 1. each静态方法默认的返回值就是，遍历谁就返回谁——不支持在回调函数中对遍历的数组进行处理
   > 2. map静态方法默认的返回值就是一个空数组——可以在回调函数中通过return对遍历的数组进行处理，然后生成一个新的数组返回

