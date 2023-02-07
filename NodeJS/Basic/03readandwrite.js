const fs = require('fs');

fs.readFile('../File/txts/grades.txt', 'utf8', (err, dataStr)=>{
    if(err){
        return console.log('读取失败'+ err.message);
    }
    // console.log(dataStr);

    //先把成绩的数据 按照空格进行分割
    const oldArr = dataStr.split(' ');
    //console.log(oldArr);    //[ '小红=99', '小白=100', '小黄=70', '小黑=66', '小绿=88' ]

    // 循环分割后的数组， 对每一项数据， 进行字符串的替换操作
    const newArr = [];

    oldArr.forEach(element => {
        newArr.push(element.replace('=', '：'));
    });

    //console.log(newArr);    //[ '小红：99', '小白：100', '小黄：70', '小黑：66', '小绿：88' ]
    // 把新数组中的每一项， 进行合并， 得到一个新的字符串

    const newStr = newArr.join('\r\n');
    // console.log(newStr);
    // 小红：99
    // 小白：100
    // 小黄：70
    // 小黑：66
    // 小绿：88

    //调用 fs.writeFile() 将处理完毕的成绩 写入新文件
    fs.writeFile('../File/txts/readanwrite.txt', newStr, (err)=>{
        if(err){
            return console.log('文件写入失败'+ err.message);
        }
        console.log('写入成功');
    })
})