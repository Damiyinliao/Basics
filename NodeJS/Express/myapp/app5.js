//全局中间件演示

const express = require('express')
const app = express()

// 定义多个全局中间件 根据调用的次序 依次执行每一个中间件
// 为req挂载属性



// 第一次调用全局中间件
app.use((req, res ,next)=>{
    //为req对象，挂载自定义属性，从而把时间共享给后面的所有路由
    const time = Date.now()
    req.startTime = time
    console.log('调用第一次全局中间件');
    next()
})
// 第二次调用全局中间件
app.use((req, res ,next)=>{
    console.log('调用第二次全局中间件');
    next()
})


//监听端口
app.get('/', (req, res)=>{
    res.send('测验中间件，开始时间戳：'+ req.startTime)
})

app.post('/user', (req, res)=>{
    res.send('测验中间件')
})
app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})