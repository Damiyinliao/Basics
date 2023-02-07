
//局部中间件的演示

//不使用app.use() 定义的中间件 称为局部生效中间件

const express = require('express')
const app = express()





const mv1 = function(req, res ,next){
    console.log('局部中间件一被调用');
    next()
}
const mv2 = function(req, res ,next){
    console.log('局部中间件二被调用');
    next()
}



//监听端口
app.get('/', mv1, (req, res)=>{
    res.send('测验中间件，开始时间戳：')
})

app.post('/user', (req, res)=>{
    res.send('测验中间件')
})

app.get('/user/login', mv1, mv2, (req, res)=>{
    res.send('Login Page.')
})
app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})