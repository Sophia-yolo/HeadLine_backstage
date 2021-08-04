# 右键添加"Open with Code "

1. 安装时勾选

   Open with Code

2. 若没勾选

   1. 新建reg文件；在vscode安装目录下新建一个文本文件,然后将文件后缀改为:*.reg,文件名任意,例如:add_vscode.reg。
   2. 编写文本文件内容.将下面的内容Copy到刚才新建的*.reg文件中,文本内容如下:

   ```reg
   	Windows Registry Editor Version 5.00
   	
   	[HKEY_CLASSES_ROOT\*\shell\VSCode]
   	@="Open with Code"
   	"Icon"="D:\\tools\\vscode\\Code.exe"
   	
   	[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
   	@="\"D:\\vscode\\Code.exe\" \"%1\""
   	
   	Windows Registry Editor Version 5.00
   	
   	[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
   	@="Open with Code"
   	"Icon"="D:\\vscode\\Code.exe"
   	
   	[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
   	@="\"D:\\vscode\\Code.exe\" \"%V\""
   	
   	Windows Registry Editor Version 5.00
   	
   	[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
   	@="Open with Code"
   	"Icon"="D:\\vscode\\Code.exe"
   	
   	[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
   	@="\"D:\\vscode\\Code.exe\" \"%V\"" 
   ```

   3. 保存关闭.然后双击运行 add_vscode.reg ,遇到提示点击 “确定"或"是”；