// 导入 express 模块
const express = require('express')

//创建 express 的服务器实例

const app = express()

// 1. 配置 Session 中间件
const session = require('express-session')
app.use(
    session({
        secret: 'ragdoll',
        resave: false,
        saveUninitialized: true
    })
)
 //托管静态页面
 app.use(express.static('./pages'))
 // 解析POST 提交过来的表单数据
 app.use(express.urlencoded({extended: false}))

 // 登录的API接口   存数据
 app.post('/api/login', (req, res)=>{
    //判断用户提交的登录信息是否正确
    if(req.body.username !== 'admin' || req.body.password != '000000'){
        return res.send({ status: 1, msg: '登陆失败' })
    }

    // 2.将登录成功后的用户信息，保存到 session 中
    //注意：只有成功配置了express-session 这个中间件之后，才能够通过req点出来session这个属性
    req.session.user = req.body //用户信息  存储到session 中
    req.session.islogin = true  //用户的登录状态  存储到session 中


    res.send({ status:0, msg:'登录成功' }) 
 })


 // 3. 获取用户姓名的接口 取数据
app.get('/api/username', (req, res)=>{
    // 从 session 中获取用户的名称，响应给客户端
    if(!req.session.islogin){
        return res.send({ status: 1, msg: 'fail' })
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    })
})

// 退出登录的接口
app.post('/api/logout', (req, res)=>{
    // 4. 清空 session 信息
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})



 app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
 })