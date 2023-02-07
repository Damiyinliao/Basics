
//第三方中间件 bodyparser.urlencoded() 演示  来解析表单中的 url-encoded 格式的数据

// 运行 npm install body-parser安装中间价
// 使用require导入中间件
// 调用 app.use() 注册并使用中间件
// Express内置的 express.urlencoded 中间件 ， 就是基于 body-parser 这个第三方中间件进一步封装出来的

const express = require('express')
const app = express()
//导入并解析表单数据的中间件 body-parser
const parser = require('body-parser')


app.use(parser.urlencoded({extended:false}))

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send('发送请求成功 准备出击')
})

app.listen(80, ()=>{
    console.log('Server running at http://127.0.0.1');
})

