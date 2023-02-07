const fs = require('fs');


//读取文件并在控制台打印出

//fs.readFile('./poem.txt',(err, data)=>{
//    if(err) throw err;
//    console.log();
//    console.log(data.toString());
//})



let p = new Promise(function(resolve,reject){
    fs.readFile('./poem.txta',(err, data)=>{
        if(err) reject(err);
        resolve(data)
    })
})

p.then(function(value){
    console.log(value.toString());
},function(reason){
    // console.error(reason);
    console.log("读取失败");
})