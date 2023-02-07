
//路由模块演示

const express = require('express');
const router = require('./router.js');
const app = express();


//导入路由模块
const userRouter = require('./router')

//使用app.use()注册路由模块
app.use( userRouter)
//为路由模块添加前缀
//app.use('/api', userRouter)


app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})