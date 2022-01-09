# rough-chrome-extensions-cli  
___  
### 描述  
这是一个cli程序，将会为你创建一个chrome-extensions开发模板。  
特点：  
- parcel 构建
- ts文件具有 --- chrome.xxx 语法提示
- 支持框架编译 (parcel自带)

注意事项：  
- 不要 **删除** src/(action | background | options) 的index.html 和 index.ts，除非会parcel。  

### 安装  
        // name 不提供的话，将会创建一个chrome-extensions的目录
        npx rough-chrome-extensions-cli [name]
### 例子  
        npx rough-chrome-extensions-cli extensions
### 内部命令行  
        // 将会对根目录的 assets 和 manifest.json 文件夹/文件 进行复制到dist目录
        // 当修改 根目录 assets 和 manifest.json 需要手动调用
        npm run copy 
        // 开发命令，将会对 src/(action | background | options) 进行监听，修改时会打包到dist目录
        npm run watch
        // 最终打包命令
        npm run build