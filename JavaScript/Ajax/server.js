//引入express
const express = require('express');

//创建应用对象
const app = express();
//创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('HELLO AJAX -2');

})


app.post('/server', (request, response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('HELLO AJAX POST');

})
//JSON响应
app.all('/json-server', (request, response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    
    const data = {
        name : 'xiaodie'
    }
    let str = JSON.stringify(data);
    response.send(str);

})

//延时响应
app.get('/delay', (request, response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        //设置响应体
        response.send('AJAX   delay');
    },3000)
    

})


//axios-server
app.all('/axios-server', (request, response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    
    const data = {
        name : 'xiaodie'
    }

    let str = JSON.stringify(data);
    response.send(str);
    // response.send(str);

})


//axios-server
app.all('/fetch-server', (request, response)=>{
    //设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    
    const data = {
        name : 'xiaodie'
    }

    let str = JSON.stringify(data);
    response.send(str);
    // response.send(str);

})

app.all('/jsonp-server',(request,response)=>{
    

    const data = {
        exist: 2,
        msg: '该用户已经存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

//  CORS 跨域解决方案
app.all('/cors-server',(request,response)=>{

    //设置响应头来解决跨域问题
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Headers','*');
    response.setHeader('Access-Control-Method','*');

    
    response.send('Hello Acors');
})

//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中");
})