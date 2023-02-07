const fs = require('fs');
const path = require('path');

//匹配style和script的正则表达式
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, dataStr)=>{
        if(err){
            return console.log(err.message);
        }
        resolveCSS(dataStr);
        resolveJS(dataStr);
        resolveHtml(dataStr);
})


//定义处理css样式的方法
function resolveCSS(dataStr){
    //使用正则提取的内容
    const result = regStyle.exec(dataStr);
    
    //console.log(result[1]);//undefined
    //将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = result[0].replace('<style>','').replace('</style>','');
    //调用fs.writeFile方法，将提取的样式， 写入到clock目录中
    fs.writeFile(path.join(__dirname,'./test.css'), newCSS, (err)=>{
        if(err){
            return console.log(err);
        }
        console.log('CSS写入成功');
    })
}
//处理JS内容的方法
function resolveJS(dataStr){
    const result = regScript.exec(dataStr);
    const newJS = result[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'./test.js'), newJS, (err)=>{
        if(err){
            return console.log(err);
        }
        console.log('JS写入成功');
    })
}

function resolveHtml(dataStr){
    const newHTML = dataStr
    .replace(regStyle,'<link rel="stylesheet" href="./test.css"/>')
    .replace(regScript,'<script src="./test.js"></script>')
    fs.writeFile(path.join(__dirname,'./test.html'), newHTML, (err)=>{
        if(err){
            return console.log(err.message);
        }
        console.log('写入HTML成功');
    })
}

