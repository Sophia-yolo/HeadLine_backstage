## 第一个shell脚本

first.sh：

```shell
# 第一行#!指定解释器，只在第一行才有效
# 注释：”#”

#!/bin/bash
echo "Hello"
```

> 执行：
>
> 1. 给予shell脚本**执行**权限：
>
>    ```shell
>    chmod a+x first.sh
>    ```
>
>    在执行：`./first.sh`
>
> 2. 运用 bash 解释器：
>
>    ```shell
>    bash first.sh
>    ```

## 变量

```shell
a=123
a=hello
a=`pwd`
a="first.sh"	# ""——软转义，``——硬转义（不转义字符）
PATH=${PATH}:path  # 变量后接字符串“path”，可以直接拼接字符串
# 【注意】":a"有特殊含义，会指到当前路径
```

- 不需要定义变量类型【弱类型语言】
  - 如a=123可以是字符串，也可以是整数





![image-20210507200005044](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210507200005044.png)



### 特殊变量

![image-20210507201050054](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210507201050054.png)

![image-20201218170251055](http://139.196.138.42/wp-content/uploads/2021/01/image-2020121817025105520210123.png)

![image-20201215174953312](http://139.196.138.42/wp-content/uploads/2021/01/image-2020121517495331220210123.png)

#### 位置变量

|      |                                                              |
| ---- | ------------------------------------------------------------ |
| $0   | 获取当前执行shell脚本的文件名，包括路径                      |
| $n   | 传递当前执行脚本的第n个参数。n 是=1……9，如果 n>9 ,则需要将n使用大括号括起来 |
| $*   | 获取当前shell的所有参数，将所有命令行参数视为单个字符串，相当于“$1$2",`”$*” 会将所有的参数作为一个整体` |
| $@   | 获取这个程序所有参数，并保留参数之间的任何空白，相当于"$1","$2","$3",这是将参数传给其他程序的最好办法。`”$@” 会将所有的参数分开【一般情况】` |
| $#   | 得到执行当前脚本的参数个数                                   |
| $-   | 显示Shell使用的当前选项,参看[set命令](https://www.runoob.com/linux/linux-comm-set.html) |

#### 状态变量

|      |                                                            |
| ---- | ---------------------------------------------------------- |
| $?   | 判断上一指令是否执行成功，0为成功，非零为不成功,           |
| $!   | 后台运行的最后一个进程的ID号                               |
| $$   | 当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID |

 



## 输入输出

### 输入

read

✔ -p：显示友好提示，需在bash下使用

✔ -s：静默模式

✔ -t：输入等待时长，超时结束(单位：s)

- -t seconds 超时



### 输出

echo

- -e：开启转义

printf

>  [PS] !和n放一起有特殊含义，需要分开





## 函数

```shell
⭐function  _printf_{
	echo $1
	return
 }

_printf_() {
	echo $1
	return
}

function _printf_(){
	echo $1
	return
}
```



## 流程控制

### TEST表达式⭐ 

1. 查阅手册

```shell
man test
```

2. 可判断类型：字符串、整型、文件
3. -G FILE：文件存在并且被有效组ID拥有
   - 如果组被解散了，则组控制的文件的组ID就是无效的

### 分支结构

**if** 

![图片](http://139.196.138.42/wp-content/uploads/2021/01/jskkNPD20210123.png)

**case**

![图片](http://139.196.138.42/wp-content/uploads/2021/01/Gcmmsqo20210123.png)

> - 分号`;;`不能没有！相当于break，加了break也要有❗❗❗
> - 默认情况可用 `default)`👉`*)`
> - case用的较少，一般用来做菜单，比if更美观



### 循环结构

**for**

1. 利用seq生成序列👉（速度慢）效率稍低

   ![图片](http://139.196.138.42/wp-content/uploads/2021/01/RErKYyC20210123.png)

2. 利用ls的匹配规则

   ![图片](http://139.196.138.42/wp-content/uploads/2021/01/dijMTBK20210123.png)

两种形式：

![图片](http://139.196.138.42/wp-content/uploads/2021/01/4fYJlKD20210123.png)

> 双小括号`(( ))`中的内容只要符合C语言运算规则即可，变量可以不使用变量前缀$，可以写i++，平常不可以用++



**while**

![image-20210508220418753](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210508220418753.png)

> - 同样适用test表达式
> - 初始化num变量，否则
>   - 第一次echo $num时，$num是空值，表现为空行
>   - 当遇到后面的+1时，系统判定它为整数类型，就当做整数用



**until**

![image-20210508220323887](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210508220323887.png)

> 与while唯一的区别在于：until写的是停止条件，while写的是循环条件





## 数组

👉赋值方式①

![image-20210508220453340](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210508220453340.png)



数组赋值【方式①】和调用👉赋值方式②

![image-20210508220537124](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210508220537124.png)



👉赋值方式③

- 还可以输出数组元素的下标

- 声明数组：declare -a num，方便阅读，不声明也可以 [弱类型语言]
- 赋值【方式②、③】
  - num[2]=10 num[5]=7 num[100]=3.2.4
  - num=(1 a b 10)
- 数组元素不一定要连续赋值，且可以为任意类型
- 【常用的数组操作】
  - 确定数组元素个数：${#arry[@]}
  - 找到数组下标：${!arry[@]}👉可以看出不是连续的

![image-20210508221116698](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210508221116698.png)



【其它数组操作】

- `+=`：追加
- `unset`：删除数组，或元素 [通过下标删除]
- [PS] 赋值方式③对多个空格也只作一个分隔符

![image-20210508221414645](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210508221414645.png)



- 可以用来存储文件名列表
- 【注意】赋值方式③给数组赋值是以空格作为分隔符，所以如果文件名里有空格，需要特殊处理
- 【PS】素数筛、线性筛

![image-20210508221526882](C:\Users\Area1\AppData\Roaming\Typora\typora-user-images\image-20210508221526882.png)







# Linux Shell 中 ()、(())、[]、[[]]、{} 的作用：https://jishuin.proginn.com/p/763bfbd322c2