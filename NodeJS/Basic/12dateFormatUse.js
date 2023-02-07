
////导入自定义的格式化时间的模块
//const time = require('./12dateformat');
//
////调用方法，进行时间的格式化
//const dt = new Date()
////console.log(dt);    //2022-10-25T13:38:34.520Z
//
//const newDT = time.dateFormat(dt);
//console.log(newDT);

//使用npm包来实现日期格式化

const moment = require('moment');

const dt = moment().format('YYYY-MM-DD HH:mm:ss');

console.log(dt);