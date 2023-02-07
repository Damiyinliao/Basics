// 导入express
const express = require('express')
//定义端口号
const port = 80
//创建web服务器
const app = express()


//1.监听GET请求
//通过app.get()方法，可以监听客户端的GET请求，具体的语法格式如下
//参数1：客户端请求的 URL 地址
//参数2：请求对应的处理函数
//      req:请求对象（包含了与请求相关的属性与方法）
//      res:响应对象（包含了与响应相关的属性与方法）
//app.get('请求URL', (req, res)=>{/*处理函数*/})
//2.监听POST请求
//通过app.post()方法，可以监听客户端的POST请求，具体语法格式如下
//app.post('请求URL', (req, res)=>{/*处理函数*/})

app.get('/user', (req, res)=>{
    res.send({
        name:'何伟',
        age:'22',
        gender:'男'
    })
})

app.post('/user', (req, res)=>{
    res.send('请求成功')
})



//3.获取URL中携带的查询参数
//通过req.query对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
/*app.get('/', (req, res)=>{
    //  req.query 默认是一个空对象
    //客户端使用 ?name=hw&age=22 这种查询字符串形式，发送到服务器的参数
    //可以通过req.query对象访问到，例如
    //req.query.name req.query.age
})*/

app.get('/search', (req, res)=>{
    console.log(req.query);
    res.send(req.query);
 })

// 4.获取url的动态参数
// 通过req.params对象，可以访问到URL中，通过 : 匹配到的动态参数
// 注意;  这里的 :id 是一个同台参数
// app.get('/user/:id', (req, res)=>{
//     // req.params 默认是一个空对象
//     //里面存放着通过 : 动态匹配到的参数值
//     console.log(req.params);
// })
app.get('/user1/:id', (req, res)=>{
    res.send(req.params)
})
// : 冒号是固定的后面的参数可以自定义也可以多个动态参数
app.get('/user2/:ids/:name', (req, res)=>{
    res.send(req.params)
})



















//启动web服务器
app.listen(port, ()=>{
    console.log(`Example app listening on port httP://127.0.0.1:${port}`);
})