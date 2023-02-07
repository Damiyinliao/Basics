const fs = require('fs');
const { resolve } = require('path');

//fs.readFile('./poetry1.txt',(err,data1)=>{
//    if(err) throw err;
//    fs.readFile('./poetry2.txt',(err,data2)=>{
//        fs.readFile('./poetry2.txt',(err,data3)=>{
//            console.log(data1 + '\r\n' + data2 +'\r\n'+ data3 );
//        })
//    })
//})


const p = new Promise((resolve,reject)=>{
    fs.readFile('./poetry1.txt',(err,data)=>{
        resolve(data)
    })
})

p.then(value =>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./poetry2.txt',(err,data)=>{
            resolve([value, data]);
        })
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./poetry3.txt',(err,data)=>{
            value.push(data);
            resolve(value);
        })
    })
    
}).then(value=>{
    console.log(value.join('\r\n'));
})
