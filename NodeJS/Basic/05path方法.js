const fs = require('fs');
const path = require('path');  // 导入path方法
//使用+号拼接路径会出现错误
 //fs.readFile(__dirname + './poetry02.txt', 'utf8', (err, dataStr)=>{
 //   if(err){
 //       return console.log(err.message);    //  ENOENT: no such file or directory, open 'C:\Users\Decre\Desktop\JS\NodeJS.\poetry02.txt'
 //   }
 //   console.log(dataStr);
 //})
//一律使用path.join()方法，该方法返回的是字符串类型
// fs.readFile(path.join(__dirname, './poetry2.txt'), 'utf8', (err, dataStr)=>{
//     if(err){
//         return console.log(err.message);   
//     }
//     console.log(dataStr);
//  });


 const fpath = 'C:/Users/Decre/Desktop/JS/NodeJS/01readfile.js'; //文件存放的路径
 const fullName = path.basename(fpath);
 console.log(fullName);
 const nameWithExt = path.basename(fpath, '.js');
 console.log(nameWithExt);
 const fext = path.extname(fpath);
 console.log(fext);