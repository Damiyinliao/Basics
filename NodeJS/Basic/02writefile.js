const fs = require('fs');

//2. 调用fs.writeFile() 方法， 写入文件的内容
// 参数1：标识文件的存放路径
// 参数2： 表示要写入的内容
// 参数2：回调函数
fs.writeFile('../File/txts/writefiletest.txt', 'Hello Node.js!', (err)=>{

    //2.1如果文件写入成功，则err的值等于null
    //2.2如果文件写入失败，则err的值等于一个 错误对象
    if(err){
        return console.log('文件写入失败！' + err.message);
    }

    console.log('文件写入成功！');

})


//fs.writeFile()方法智能用来创建文件 不能用来创建路径
//重复调用fs.writeFile写入同一个文件， 新写的内容会覆盖之前的旧内容