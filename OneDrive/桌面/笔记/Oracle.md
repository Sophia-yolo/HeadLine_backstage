## 系统权限

### 建立用户

```sql
SQL> create user wiwth //wiwth是自己创建的用户
   2 identitied by 123456 //123456是自己创建的密码
   3 /
用户已创建
```

**为该账户赋予系统权限**

```sql
SQL> grant create session to wiwth;
```



### 重置密码

```sql
SQL> alter user wiwth
   2 identified by 123
   3 /
用户已更改
```



### 切换用户

```sql
SQL> connect wiwth/123 //awiwth是用户，123是面
```



### 锁定账户

```sql
SQL> alter user scott account lock; // scott/tiger
```



### 解锁账户

```sql
SQL> alter user scott account unlock;
```

如果出现未连接：开好-计算机-右键-管理-计算机管理-服务和应用程序-服务-`OracleServerORACL`-启动（重新启动）- 重启 `SQL Plus`



### 创建表

```sql
//授予删除表的权限
SQL> grant create table to wiwth
//切换awiwth下可以创建表
SQL> create table mytable
   2 (id number,
   3 name varchar(10)
   4 );
```



### GRANT

一般格式：

```
	GRANT <权限>[,<权限>]……
	ON<对象类型><对象名>[,<对象类型><对象名>]……   //可省略
	TO<用户>[,<用户>]……
	[WITH GRANT OPTION]
```

with grant option 获得某种权限的用户，可以传播该权限

```sql
//将表授权给awiwth用户
SQL> grant select on mytable 
   2 to awiwth;
```

```sql
//查询在awiwth中的新表
SQL> select count(*) 
   2 from awiwth.mytable;
   
     COUNT(*)
----------
         0
```

#### 撤销权限

```sql
SQL> remove select on mytable
   2 from awiwth;
```





### 删除用户

```sql
SQL> drop user wiwth cascade;
```



### 数据库角色

​	数据库角色是被命名的一组与数据库操作相关的权限，**角色是权限的集合**。

```
//在system用户下授权角色
SQL> grant create role to wiwth;
```

#### 角色创建

```
	CREATE ROLE<角色名>
```

```
//创建myrole角色
SQL> create role myrole;
```



```
SQL> grant select,insert,update
   2 on mytable to myrole;
```



#### 给角色授权

```
	GRANT<权限>[,<权限>]……
	ON<对象类型><对象名> 
	TO<角色>[,<角色>]
```

#### 一个角色授予其他角色用户

```
	GRANT<角色1>[,<角色2>]
	TO<角色3>[,<用户1>]
	[WITH GRANT OPTION]
```

#### 收回角色权限

```
	REVOKE<权限>[,<权限>]……
	ON<对象类型><对象名> 
	FROM<角色>[,<角色>]
```





#### 创建表空间

```sql
SQL> create tablespace MyTS1 datafile
  2  'D:\MYTS\myts1.def' size 500M;
```

#### 更改用户

```sql
SQL> alter user system default
  2  tablespace MyTs1;
```

#### 创建表

```sql
//创建学生表
SQL> create table Student
  2  (Sno Char(10) primary key,
  3   Sname varchar(30),
  4   Ssex char(2) check(Ssex in('男','女')),
  5   Sage number,
  6   Sdept varchar(40)
  7   );
//创建课程表
SQL> create table Course
  2  (Cno char(4) primary key,
  3   Cname varchar(40) not null,
  4   Cpno char(4),
  5   Ccredit number not null,
  6   foreign key(Cpno) references Course(Cno));
//创建SC
SQL> create table SC
  2  (Sno char(10),
  3   Cno char(4),
  4   Grade number check(Grade>=0 and Grade<=100),
      //主键
  5   primary key(Sno,Cno),
  6   foreign key(Sno) references Student(Sno),
  7   foreign key(Cno) references Course(Cno));
```



### 修改表

```sql
SQL> alter table Student
   2 add S_entrance date not null;
```



#### 修改列的数据类型

```sql
SQL> alter tabel Student
   2 modif S_entrance char(10);
```



#### 增加列

```sql
SQL> alter table Student
  2  add Gra char(1);
```



#### 删除列

```sql
SQL> alter table Student
   2 drop column S_entrance
```



#### 修改列名

```sql
SQL> alter table Student
   2 rename column Sdept to Sdep;
```



#### 添加完整型约束

```sql
SQL> alter table Student
   2 add constraint C1	unique(Cname);	//学生姓名添加唯一性约束，C1是完整型约束的名称
```



#### 删除完整型约束

```sql
SQL> alter table Student
   2 drop constraint C1；
```



#### 查表结构

```sql
SQL> desc Student;
```



### 删除表

```sql
//删除选修表，课程表，学生表
SQL> drop table SC;
SQL> drop table Course;
SQL> drop table Student;
表已删除。
```





## 过程

当发现过程的执行**没有预期的结果出现**时

> 请先执行**`set serveroutput on`**语句。



### 控制语句

条件

循环



### 显示游标





### 创建过程

```sql
create or replace procedure procedure_name() {is | as}
begin
	……
end procedure_name
```

> 赋值：`x:=1;`

🌰

```sql
//输入：i;
//输入：o;
create or replace procedure test_while(i in int,o out number) as
//局部变量：k;
k int;
begin
      k:=1;o:=0;
      while k<=i loop
         begin
               o:=o+k;
               k:=k+1;
         end;
       end loop;
       // ||:表示字符串的合并
       dbms_output.put_line('sum='||o);
end test_while;

```



### 执行过程

1. Execute()函数执行 👉 exec执行

2. 匿名`PL/SQL`程序块执行

   > 输出：`dbms_output`

同上🌰：

```sql
declare 
i int;
begin
	test_while(100,i);
end;
```









## 函数

教材 `P327`、第六章





## 触发器

