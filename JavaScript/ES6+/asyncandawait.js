const fs = require('fs');



function readPoetryOne(){
    return new Promise((resolve, reject)=>{
        fs.readFile('../ES6/poetry1.txt',(err, data)=>{
            if(err) reject(err)
            resolve(data);
        })
    })
};
function readPoetryTwo(){
    return new Promise((resolve, reject)=>{
        fs.readFile('../ES6/poetry2.txt',(err, data)=>{
            if(err) reject(err)
            resolve(data);
        })
    })
};
function readPoetryThree(){
    return new Promise((resolve, reject)=>{
        fs.readFile('../ES6/poetry3.txt',(err, data)=>{
            if(err) reject(err)
            resolve(data);
        })
    })
};
async function main(){
    let p1 = await readPoetryOne();
    let p2 = await readPoetryTwo();
    let p3 = await readPoetryThree();
    console.log(p1.toString() +'\r\n'+ p2.toString() +'\r\n'+ p3.toString());
}
    
main();