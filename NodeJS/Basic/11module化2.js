// 导入模块 11module化1

const m = require('./11module化1');

//使用require方法导入模块时，导入的结果，永远以module.exports指向的对象为准

console.log(m);//输出{ nickname: 'xiaohe', sayHi: [Function: sayHi] }


// 谨记，最终以module.exports为准


//注意：为了防止混轮， 建议大家不要在同一个模块中同时使用exports和module.exports    