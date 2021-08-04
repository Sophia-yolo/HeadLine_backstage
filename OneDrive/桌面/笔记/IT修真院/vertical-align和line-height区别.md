#### vertical-align属性

设置图片或者表单(<!--行内块元素（默认：baseline时，而文字由行高决定，有空白缝隙）-->)和文字垂直对齐

##### 图片底侧空白缝隙(类似于一个空白节点)解决方案**：**

1. 物理删除空隙

2. 给图片添加`vertical-align：midder\top\bottom`等（提倡）

3. 把图片转换成块级元素`display：block；`

4. 直接修改`line-height`的值

5. line-height为相对单位，font-size间接控制

   ```
   line-height:1.6 或者 line-height:160%
   font-size: 0;
   ```



#### line-height——行高

实现单行文本垂直居中（行高等于高度）（行高>高度，文字偏下；行高<高度，文字偏下）



#### text-alight——文本对齐

属性值：左对齐left（默认），右对齐right ，居中对齐centor

- 当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）。
- 也可以使行内元素和行内快元素居中对齐



参考资料：https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/?shrink=1