const express = require('express')

const app = express()

// 1. 安装并导入 JWT 相关的两个包，分别是jsonwebtoken 和 express-jwt
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 允许跨域资源共享
const cors = require('cors')
app.use(cors())

//解析 post 表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

// 2. 定义secret 密钥，建议将密钥命名为 secretKey
const secretKey = '511526hewei'

// 4. 注册 JWT 字符串 解析还原成 JSON 对象的中间件
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到req.user属性上
// app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))   
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))


// 登录接口
app.post('/api/login', function (req, res) {
    //将 req.body 请求体中的数剧， 转存为 userinfo 常量
    const userinfo = req.body
    //登录失败
    if(userinfo.username !== 'admin' || userinfo.password !== '000000'){
        return res.send({
            status: 400,
            message: '登录失败！'
        })
    }

    // 登陆成功
    // 3. 在登录成功之后，调用 jwt.sign() 方法生成 jwt 字符串。并通过 token 属性发送给客户端
    // 参数1 用户的信息对象
    // 参数2：加密的密钥
    // 参数3. 配置对象，可以配置当前 token 的有效期
    const tokenStr = jwt.sign({username: userinfo.username}, secretKey, { expiresIn: '50s'})
    res.send({
        status: 200,
        message: '登陆成功',
        token: tokenStr   //要发送给客户端的 token 字符串
    })
})

// 这是一个有权限的API接口
app.get('/admin/getinfo', function(req, res){
    // 5. 使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
    console.log(req.user);
    res.send({
        status: 200,
        message: '获取用户信息成功！',
        data: req.user // 要发送给客户端的用户信息
    })
})


//6. 使用全局错误处理中间体，捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next)=>{
    if(err.name === 'UnauthorizedError'){
        // 这次错误室友 token 解析失败导致的
        return res.send({
            status: 401,
            message: '无效的token'
        })
    }
    res.send({
        status: 500,
        message: '未知的错误'
    })
})




app.listen(8888, ()=>{
    console.log('Server running at http://127.0.0.1:8888');
})