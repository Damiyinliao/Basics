const express = require('express');

const app = express();

app.all('/jsonp-server',(request,response)=>{
    // response.send('hello jsonp');
    const data = {
        name: 'hewei'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);

});

app.listen(9000, ()=>{
    console.log("你的服务已经启动在9000端口");
})