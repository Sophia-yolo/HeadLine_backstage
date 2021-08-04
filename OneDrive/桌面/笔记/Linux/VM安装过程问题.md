# VMware Workstation 与 Device/Credential Guard 不兼容

原因分析：
VMware和Hyper-V不兼容导致。



解决方案：

1. 按下WIN+R打开运行，然后输入services.msc回车；
2. 在服务中找到 HV主机服务，双击打开设置为禁用

![img](https://img-blog.csdnimg.cn/20191002143736740.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2x1Y2t5c2lnbg==,size_16,color_FFFFFF,t_70)

3. windowns键+X  再打开Windows PowerShell（管理员）

4. 运行命令：bcdedit /set hypervisorlaunchtype off；
5. 重启windowns10系统