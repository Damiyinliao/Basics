const fs = require('fs');

const utl = require('util');


const mineReadFile = utl.promisify(fs.readFile);

async function main(){
    let data1 = await mineReadFile('./poetry1.txt');
    let data2 = await mineReadFile('./poetry2.txt');
    let data3 = await mineReadFile('./poetry3.txt');
    console.log(data1 + '\r\n' + data2 + '\r\n' + data3);
}

main();

