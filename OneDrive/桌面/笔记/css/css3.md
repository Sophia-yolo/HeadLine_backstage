

















# 属性

元素偏移量offest系列

- 获得元素距离带有定位父元素的位置
- 获得元素自身大小（宽度高度）
- 返回的数值都不带单位
- offest系列常用属性
  - element.offestParent——返回作为该元素带有定位的父级元素，如果父级都没有定位则返回body
  - element.offeatTop——返回元素相对带有定位父元素上方的偏移
  - element.offestLeft——返回元素相对带有父元素左边框的偏移
  - element.offestWidth——整个元素的高度，返回自身包括padding、边框、内容区的宽度，返回数值不带单位
  - element.offentHight——整个元素的宽度，返回自身包括padding、边框、内容区的高度，返回数值不带单位

> opacity:.5=>表示半透明

------

元素可视区client

- element.clientTop——返回元素上边框的大小
- element.clientLeft——返回元素左边框的大小
- element.clientWidth——元素的可见高度，返回自身包括padding、内容区的宽度，不包含边框，返回值不带单位
- element.clientHeight——元素的可见宽度，返回自身包括padding、内容区的高度，不包含边框，返回值不带单位

> dpr 物理像素比=>window.devicePixelRatio || 1 pageshow 无论页面是否缓存，在页面显示时触发，重新加载页面；根据事件对象中persisted来判断是否是缓存中的页面触发的pageshow，事件是给window添加

------

元素scroll属性

- element.scrollTop——返回被卷去的上侧距离，返回数值不带单位
- element.scrollLeft——返回被卷去的左侧距离，返回数值不带单位
- element.scrollWidth——返回自身实际宽度，不含边框，返回数值不带单位
- element.scrollHight——返回自身实际高度，不含边框，返回数值不带单位
- scroll事件
- 注意：元素被卷去的头部是element.scrollTop,如果是页面被卷去的头部则是window.pageYOffset

------

mouseenter鼠标事件

- 当鼠标移动到元素上时就会触发mouseenter事件
- 类似mouse over，但mouseover 鼠标经过自身盒子会触发，经过滋贺子还会触发。mouseenter只会经过自身盒子触发（因为mouseenter不会冒泡）
- mouselever——离开



判断滚动条是否滚动到底

> 垂直滚动条
> scrollHeight -scrollTop = clientHeight
>
> 水平滚动
> scrollWidth -scrollLeft = clientWidth

