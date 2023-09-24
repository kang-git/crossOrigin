## 跨域问题解决

### 基础案例 - [示例代码]()

>   web服务和api服务均使用koa托管，示例代码具体文件结构如下

```shel
# frontend	
.
|-- demo.html
|-- node_modules
|-- package.json
|-- server.js
`-- yarn.lock

# api-server
.
|-- node_modules
|-- package.json
|-- server.js
`-- yarn.lock
```

>   代码中使用不同分支区分初始表现及各解决方案
>
>   +   crossO   初始表现
>   +   backResolve    后端配置响应头解决
>   +   