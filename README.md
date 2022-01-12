# rough-chrome-extensions-cli  
___  
### 描述  
这是一个cli程序，将会为你创建一个chrome-extensions开发模板。  
特点：  
- parcel 构建
- ts文件具有 --- chrome.xxx 语法提示
- 支持框架编译 (parcel自带)

注意事项：  
- /src/action/index.html、/src/options/index.html、/src/background/index.ts。这些是parcel操作的主文件，不可以进行删除  
- /src/inject **内**可以随意 添加、删除文件（目录）。操作是进行 编译后 复制到 /dist/inject 目录。  
- /static目录 和 /manifest.json文件，不做编译 只进行修改监听后 复制到/dist。
- manifest 文件在书写时，需要去除 src。例：  
    - 文件路径 --- /src/options/index.html、 /manifest.json  
    - /manifest.json --- options_page: options/index.html  
    - 原因： 最终均是打包到dist目录  

### 安装  
        // name 不提供的话，将会创建一个chrome-extensions的目录
        npx rough-chrome-extensions-cli [name]
### 例子  
        npx rough-chrome-extensions-cli extensions
### 内部命令行  
        // 开发命令，将会对 /src/(action | background | options | inject)、/manifest.json、/static 进行监听  
        // 修改时会打包到dist目录
        npm run watch
        // 最终打包命令
        npm run build