
//错误的中间件演示

const express = require('express')
const app = express()


app.get('/', (req, res)=>{
    throw new Error('自造错误')
    res.send('人为制造错误')
})
//  注意！ 错误的中间件 必须注册在路由之后
app.use((err, req, res, next)=>{
    console.log('发生了错误' + err.message);
    res.send('发生了错误' + err.message)
    next()
})
app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})