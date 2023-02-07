// 导入http模块
const http = require('http');

//创建 web 服务器实例
const server = http.createServer()

//为服务器实例绑定 request 事件， 监听客户端的请求
server.on('request', (req, res)=>{
    console.log('Someone visit our web server.');
    //req.url 是请求对象 包含了与客户端相关的数据和属性
    const url = req.url;
    //req.method 是客户端请求的 URL 类型
    const method = req.method;
    // const str = `Ur request url is ${url}, and request method is ${method}`;
    const str = `你的请求地址是：${url}，请求的method类型是${method}`
    console.log(str);
    // 为了防止中文显示乱码的问题， 需要设置响应头 Content-Type 的值为text/html: charet=utf8
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 把包含中文的内容，响应给客户端
    res.end(str);
});

//启动服务器
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})