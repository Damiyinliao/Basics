// 导入 mysql 模块
const mysql = require('mysql')

// 建立与MySQL 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',      // 数据库的 IP地址
    user: 'root',           //登录数据库的账号
    password: '123456',     //登陆数据的密码
    database: 'new_schema01'//指定要操作哪个数据库
})

//带插入的数据
// const user = { username: 'Spider-Man', password: 'qmn123'}
// //插入语句
// const sqlStr = 'insert into users(username, password) values (?, ?)'    // ? 问号是占位符
// //执行SQL语句
// db.query(sqlStr,[user.username, user.password], (err, result)=>{
//     //执行SQL语句失败了
//     if(err) return console.log(err.message);
//     //成功了
//     //注意：如果执行的是 insert into 插入语句， 则 result 是一个对象
//     //可以通过 affectedRows属性，来判断是否插入数据成功
//     if(result.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })

//插入数据的便捷方式演示
//待插入数据
// const user1 = { username: 'Auth', password: '511526'}
// //插入语句
// const sqlStr1 = 'insert into users set ?'
// //执行SQL语句
// db.query(sqlStr1, user1, (err, result)=>{
//     if(err) return console.log(err.message);
//     if(result.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })

//更新数据演示
// const user2 = { id: 5, username: 'GentleMan', password: 'youilove'}
// const sqlStr2 = 'update users set username=?, password=? where id=?'
// db.query(sqlStr2, [user2.username, user2.password, user2.id], (err, result)=>{
//     if(err) return console.log(err.message);
//     if(result.affectedRows === 1){
//         console.log('更新成功');
//     }
// })


// 更新数据的便捷方式演示
// const user3 = { id: 1, username: 'GoodMan', password: 'hewei'}
// const sqlStr3 = 'update users set ? where id=?'
// db.query(sqlStr3, [user3, user3.id], (err, result)=>{
//     if(err) return console.log(err.message);
//     if(result.affectedRows === 1){
//         console.log('更新成功');
//     }
// })


// 删除 id 为 5 的用户
// const sqlStr = 'delete from users where id = ?'
// db.query(sqlStr, 4, (err, result)=>{
//     if(err) return console.log(err.message);
//     //注意：执行delete语句之后，结果也是一个对象，也会包含affectedRows属性
//     if(result.affectedRows === 1){
//         console.log('删除数据成功');
//     }
// })


// 标记删除
const sqlStr = 'update users set status = ? where id = ?'
db.query(sqlStr, [1, 6], (err, result)=>{
    if(err) return console.log(err.message);
    if(result.affectedRows === 1){
        console.log('标记删除成功 更新成功');
    }
})