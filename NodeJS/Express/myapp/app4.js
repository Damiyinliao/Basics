//简单的中间件演示


const express = require('express')
const app = express()

//定义一个最简单的中间件函数
// const mv = function(req, res, next){
//     console.log('该中间件已经被执行');
//     //把流转关系 转交给下一个中间件或路由
//     next();
// }
// //将mv注册为全局生效的中间件
// app.use(mv)


//还可以简化定义全局中间件的形式
//全局生效的中间件
app.use((req, res ,next)=>{
    console.log('这是一个最简单的中间件函数');
    next()
})



//监听端口
app.get('/', (req, res)=>{
    res.send('测验中间件')
})

app.post('/user', (req, res)=>{
    res.send('测验中间件')
})
app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})