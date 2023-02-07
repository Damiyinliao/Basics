
//中间件 express.urlencoded() 演示  来解析表单中的 url-encoded 格式的数据

const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send('发送请求成功 准备出击')
})

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})