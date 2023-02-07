
// 中间件 express.json() 演示    （有兼容性 尽在4.16.0+版本中可用）
const express = require('express')
const app = express()

// 注意！ 除了错误级别的中间价 其它的中间件 必须在路由之前进行配置
// 通过 express.json() 这个中间件 解析表单中的JSON 格式的数据
app.use(express.json())


app.post('/', (req, res)=>{
    // 在服务器中 可以使用 req.body 这个属性 来接受客户端发送过来的请求体数据
    // 默认情况下 如果不配置解析表单数据的中间件 则 req.body 默认等于 undefined
    console.log(req.body);
    res.send('请求成功')
})
app.listen(80, ()=>{
    console.log('Server running at 127.0.0.1');
})

