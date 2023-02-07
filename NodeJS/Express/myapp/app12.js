
// 初识 API

const express = require('express')

const app = express()

// 中间件 express.urlencoded() 解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({extended:false}))


//使用express写接口
//必须在配置cors 中间件之前 配置 JSONP 的接口
app.get('/api/jsonp', (req, res)=>{
    // TODO: 定义 JSONP 接口具体的实现过程
    // 1. 得到函数的名称
    const funcName = req.query.callback
    console.log(funcName);
    // 2. 定义要发送到客户端的数据对象
    const data = { name: 'hewei', age: 22, type: 'god'}
    // 3. 拼接出一个函数的调用
    const scriptStr =  `${funcName}(${JSON.stringify(data)})`
    // 4. 把拼接的字符串，响应给客户端
    res.send(scriptStr)
})





//  使用cors中间件解决跨域问题 比如由file协议 访问到http协议
//  cors 是Express 的一个第三方中间件，通过安装和配置cors中间件，可以很方便地解决跨域问题
const cors = require('cors')        //导入中间件
app.use(cors())                     //配置中间件


// 导入并注册路由模块
const router = require('./apirouter12')
// 全局注册路由模块
app.use('/api',router)

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})