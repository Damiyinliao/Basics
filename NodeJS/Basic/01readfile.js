
//fs.readFile = function(path, options, callback) 
//fs.readFile() 接收 3 个传参，分别是 path, options, callback。
//通过下面的代码可以看到，其中的 options 是一个可选的参数，callback 始终是取最后一个参数。path 支持路径字符或者文件标识符。


// 1.导入 fs 模块 来操作文件

const fs = require('fs');

// 2.调用fs.readFile() 方法读取文件
//  参数1：读取文件存放路径
//  参数2：读取文件时候采用的编码格式，一般默认指定 utf8
//  参数3：回调函数，拿到读取失败和成功的结果 err dataStr

fs.readFile('../File/txts/poetry1.txt', 'utf8', function(err, dataStr){
    // 2.1 打印失败的结果
    // 如果读取成功， 则err的值为null
    // 如果读取失败，则err的值为错误对象，dataStr 的值为undefined
    if(err)console.log('有错误' + err.message);
    // 2.2 打印成功的结果
    console.log(dataStr);
})