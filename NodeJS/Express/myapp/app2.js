
//静态资源托管前添加前缀演示

const express = require('express')
const app = express()
const port = 80

//使用express.static()方法向外提供静态资源
app.use(express.static('./public'))

//如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用路径前缀，则可以使用如下的方式
app.use('/public', express.static('public'))

app.listen(port, ()=>{
    console.log('Server running at http://127.0.0.1');
})