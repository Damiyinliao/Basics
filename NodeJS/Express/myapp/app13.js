// 导入 mysql 模块
const mysql = require('mysql')

// 建立与MySQL 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',      // 数据库的 IP地址
    user: 'root',           //登录数据库的账号
    password: '123456',     //登陆数据的密码
    database: 'new_schema01'//指定要操作哪个数据库
})

// // 测试 mysql 模块能否正常工作
// db.query('select 1', (err, result)=>{
//     // mysql 模块工作期间报错了
//     if(err) return console.log(err.message);
//     //能够成功地执行 SQL 语句
//     console.log(result);      //[ RowDataPacket { '1': 1 } ] 该语句表示连接成功
// })




// 查询 users 表中所有的数据
const sqlStr = 'select * from users'
db.query(sqlStr, (err, result)=>{
    // 查询数据失败
    if(err) return console.log(err.message);
    //查询数据成功
    console.log(result);   
})

