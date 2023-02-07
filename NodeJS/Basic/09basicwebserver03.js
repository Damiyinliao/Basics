// 导入http模块
const http = require('http');

//创建 web 服务器实例
const server = http.createServer()

//为服务器实例绑定 request 事件， 监听客户端的请求
server.on('request', (req, res)=>{

    const url = req.url;
    let content = '<h1>404 NOT Found!</h1>';    //  1.默认的内容为 404 Not Found
    if(url === '/' || url === '/index.html'){  
        content = '<h1>首页</h1>'    //  2.用户请求的是首页
    }else if(url === '/about.html'){
        content = '<h1>关于页面</h1>'//  2.用户请求的是关于页面
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');  //防止中文乱码
    // 把包含中文的内容，响应给客户端
    res.end(content);
});

//启动服务器
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})