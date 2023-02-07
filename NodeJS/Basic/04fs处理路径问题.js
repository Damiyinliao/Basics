// 不要使用 ./ 或 ..//这样的相对路径

//在使用fs模块操作文件时，如果提供的操作路径是以./ 或 ../开头的相对路径时，很容易出现路径动态拼接错误的问题
// 原因：代码在运行的时候，汇之星node命令时所处的目录，动态拼接出被操作文件的完整路径
//解决方案：在使用fs模块操作文件时，直接提供完整的路径
const fs = require('fs');
// fs.readFile('../File/txts/poetry2.txt', 'utf8', (err, dataStr)=>{
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(dataStr);
// })



//__dirname表示当前文件所处的目录
console.log(__dirname);
fs.readFile(__dirname + '/poetry2.txt', 'utf8', (err, dataStr)=>{
    if(err){
        return console.log(err.message);
    }
    console.log(dataStr);
})
