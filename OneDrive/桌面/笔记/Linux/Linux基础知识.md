## 一切皆文件



与用户相关的文件：

1. /etc/passwd
2. /etc/group



### 用户与组

![img](file:///C:\Users\Area1\OneDrive\文档\Tencent Files\3214533173\Image\C2C\7B4065C232BB08EE9CC9A4084D87C5D2.JPG)

- 每个文件都有一个拥有者和拥有组
- 创建用户时没有特殊指定组，会以自己用户名创建一个组
- 拥有者可以不在这个拥有组中
- d 为目录
- **权限**：字符表示(r可读、w可写、x可执行)→8/10进制描述
- 每个文件都有一个拥有者、一个拥有组、其余用户



### 我是谁、我在哪、我要去哪

> 书写命令或路径时，善用Tab键

1. 我是谁 
   - whoami：系统感觉你是谁
   - who am i（看到本质）：你实际是谁

2. 我在哪 pwd：print working directory
3. 去哪 cd：change directory



### 软件安装

- 下载 xxx.deb：使用命令 dpkg -i xxx.deb

- 下载 xxx.tar：使用 tar 解压

- apt 安装：可自动解决依赖关系、可选择合适的软件源地址
  - 安装放置：bin、lib；/usr/→bin、include、lib、local、share(帮助手册)、src
  - 相关命令
    - sudo !! ：获取临时权限
    - search可以找一个软件，查看是否存在、可能忘记名字了
    - apt-cache search xxx （搜索xxx软件）
    - apt remove xxx--purge (不保留配置文件)
    - apt autoremove慎用，毕竟是apt管理的，可能误删还要用但没在运行、其他方式下载的软件

- 选择合适的源配置远程地址

- 源码安装

  > ```bash
  > git clone XXXX
  > cd XXXX
  > make
  > make install
  > #mysql
  > ```

  



## Linux 常用命令

### 命令相关

- apt和apt-get没区别
- history：打印输出的命令历史
- tldr + 命令：查看命令格式
- wget可以下载文档数据
- echo $PATH：打印PATH环境变量，存放系统默认的可执行文件的路径
- 通常使用[man 命令]或[命令 -h]可以查看命令帮助
  - 使用说明的格式规则：[] 可选选项，| 不能同时使用的参数
- alias 别名=命令，可设置别名对应的命令
- 僵尸进程[有害]：子进程死了，父进程没管，子进程还占着资源；孤儿进程[无害]：会被1号进程领养

**路径**

- 绝对路径：起始点为根目录/
- 相对路径：善用当前路径"."和上一级路径".."
- 远程路径：`协议://用户名:密码@位置/路径:端口`
- 特殊路径：
  - `~ 用户名 /`= 用户名的家目录
  - `-` = 上次工作目录

**终端（Terminal）——  shell（人机交互接口）**

- Terminal类似设备
- Terminal里面运行着Shell软件，比如bash、zsh，用来解释在Terminal中输入的命令
- Shell接收命令时：是否内置→在系统环境变量PATH中的路径里查找、调用



### 文件及目录相关命令

#### ls

#### cd

#### pwd

#### cp

#### mv

#### rm

#### mkdir

#### tree

#### tar

#### ln

- 软链接
- 硬链接



### 文件内容的修改与查看

#### touch

#### cat

#### vim

#### echo

#### more

#### less（less比more更友好，功能更多）

#### head

#### tail

#### diff

#### grep：检索信息

​	⭐Linux三剑客：grep [Global Regular Expression Print]、awk [数据处理]、sed [批量操作]

#### wc：word count

#### 查看文件权限

- ll = ls -lh
  - 可通过which ll 或 alias ll 查看ll具体使用的命令
- l = ls -lah
- 系统中的三个时间：修改时间mtime、读取时间atime、权限修改时间ctime

#### 文件类型

![img](http://www.letmeseesee.cn/wp-content/uploads/2021/01/czgy186mWStRKpq20210123.png)

- link：可暂时理解为windows的快捷方式

- block：系统大多数的block是4096Byte = 4KB，起到缓冲的作用，类比快递配送

- character：设备也是文件，如虚拟终端 /dev/pts/0

- socket：基于网络的都离不开它

- pipe：不占用内存，只负责传输，举例一次传输：echo > 管道文件，cat 管道文件

- 3种普通文件

  ![图片](http://139.196.138.42/wp-content/uploads/2021/01/dcJIQ5OxYHSnw9G20210123.png)

#### ❗ 特殊符号

- 管道：| 把前一个命令的输出传给下个命令
- 重定向： >、>>、<、<< 
- 后台运行：&
- 序列执行：&&



### 文件的查找与定位

#### find：查找文件

#### which：查找可执行文件

#### whereis：查看软件的安装目录

#### file：查看文件的具体信息

#### locate

- 基于索引，查找非常快
- 【不是实时更新】，因为更新需遍历全部文件，慢
- 会定期更新，或使用sudo updatedb立即更新数据库



### 用户相关命令

#### useradd

#### userdel

#### usermod

#### passwd

#### su

- 使用"-"，会完全更新环境变量，适合复杂操作
- 不加"-"，会适当更新环境变量，适合临时切换用户

#### sudo

- sudo -i：使用超管权限登录默认shell
- sudo !! 可以以超级用户准备执行上次命令
  - ![图片](http://139.196.138.42/wp-content/uploads/2021/01/P3qp2SBJFWL8yDV20210123.png)
  - 可以以超级用户准备执行上次命令，不需要再输一遍命令了

#### chgrp：修改文件所属的组，一般可用chown替代

```c
chgrp root file					//修改 file 所属的组为 root
```

#### chmod：change mode

- a = all、+ 增加权限、- 去除权限、= 直接覆写权限

- ```c
  chmod ugo = x a.c			//a.c是所要改的文件
  结果：---x--x--x 1 所属用户 所属组
  chmod a+x file				//给 file 文件的 ugo 都赋予执行的权限
  chmod 755 file				//设置 file 文件的权限为 rwxr-xr-x
      
  PS：利用 id 查看信息
  ```

- 尽量减少chmod 777的使用，权限开放过多

#### chown：change owner

- 可同时修改文件所属的用户和组
  
  - ```
    写法：chown 所属用户:所属用户组 file
    ```
    
  - chown 所属用户:所属组 文件
  
- 可修改目录及目录下所有文件的所属用户
  
  - ```
    写法：chown 所属用户 a.c
    ```
    
  - chown -R 所属用户 目录
  
- 修改目录 directory 及目录下的所有文件的所属用户和所属组

  - ```
    chown -R 所属用户:所属组 directory
    ```

#### logout

#### exit



### 进程相关命令

#### ps

- 常用ps -ef，输出所有进程的详细信息

#### kill

- kill指定PID [process ID] 即可杀死进程

#### pkill

- pkill可以批量杀死字符匹配的进程，只杀死该用户有权限杀的，sudo pkill慎用

#### killall

#### crotab

- crontab -e：编辑【定时任务】，参考里面格式即可

#### ctrl + z：挂起进程到前台

#### fg

- %2（或fg %2）[zsh下]、fg 2 [bash下] 将2号进程调至前台
- [PS] fg可用在修改源文件、gcc的时候，提高效率

#### bg：可以在后台跑，输出会显示在终端

#### jobs：查看进程序号



### 系统信息获取命令

#### data

#### df：查看文件系统

#### du

#### free

`-h` 说人话，友好显示

- du -h，友好显示目录文件大小，K、M
- free -h，友好显示内存数据

#### 查看系统信息

##### top

```c
使用系统命令top即可看到如下类似信息：
Cpu(s):  0.0%us,  0.5%sy,  0.0%ni, 99.5%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
```

> us：用户空间占用CPU百分比
> sy：内核空间占用CPU百分比
> ni：用户进程空间内改变过优先级的进程占用CPU百分比
> id：空闲CPU百分比
> wa：等待输入输出的CPU时间百分比
> hi：硬件中断
> si：软件中断 
> st：实时

##### htop

##### dstat

##### nmon：适合检查系统什么时候出了问题

优秀的资源监控软件

- **Htop**：一款运行于Linux的监控与进程管理软件，比top更友好
- **nmon**：用于Linux的计算机性能系统监视工具 [IBM开发]
- **dstat**：灵活的资源统计工具

#### ifcofig： [interfaces config] 

#### uname

- uname -a：打印所有可用的系统信息，还可以用 `cat /etc/os-release`

#### last

#### who



### 其他命令

#### ssh

#### scp

【scp使用ssh拷贝】

- 远程👉本地：scp username@ip_address: 远程文件 本地路径
- 本地👉远程：scp 本地文件 username@ip_address: 远程路径

#### wget

#### ping

#### poweroff

#### reboot

#### 修改主机名

1. **hostnamectl**

```c
sudo hostnamectl set-hostname 主机名
```

2. **vim /etc/hostname**

#### 与其它终端聊天

- 输入w查看在线终端
  - TTY[Teletype]：终端；pts[pseudo terminal slave]：虚拟终端
- 输入echo "hello" >> /dev/pts/1给终端pts/1发"hello"
  - pts/1可以收到消息，并以同样方式echo回信



