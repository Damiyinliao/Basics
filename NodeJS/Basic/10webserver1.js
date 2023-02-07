const http = require('http')
const fs = require('fs');
const path = require('path');

const server = http.createServer()
let fpath = ''
server.on('request', (req, res)=>{
    const url = req.url; // \
    if(url === '/'){
        fpath = path.join(__dirname, './index.html');
    }else{
        fpath = path.join(__dirname, './test.html');
    }
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');  //防止中文乱码

    fs.readFile(fpath, 'utf8', (err, dataStr)=>{
        if(err){
            return res.end('404 Not Found!');
        }
        //响应给客户端
        res.end(dataStr)
    })

})
server.listen(80,()=>{
    console.log('Your server running at http://127.0.0.1');
})