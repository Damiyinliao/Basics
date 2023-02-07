/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
//导入数据库处理的模块
 const db = require('../db/index')
//导入数据加密模块
 const bcrypt = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
// 导入全局的配置文件
const config = require('../config')       //jwtSecretKey
// 解析 Token 字符串的包
const expressJWT = require('express-jwt')
// 注册用户的处理函数
exports.regUser = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
    // 判断数据是否合法
    if (!userinfo.username || !userinfo.password) {
    return res.send({ status: 1, message: '用户名或密码不能为空！' })
    }

    const sql = `select * from ev_users where username=?`
    db.query(sql, [userinfo.username], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
          // return res.send({ status: 1, message: err.message })
          return res.cc(err)    //代码优化
        }
        // 用户名被占用
        if (results.length > 0) {
          // return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
          return res.cc('用户名被占用，请更换其他用户名！')   //代码优化
        }
        // TODO: 用户名可用，继续后续流程...
        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
        console.log(userinfo);
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        console.log(userinfo);
        //用户名可用那么就注册插入到数据库中
        //定义插入新用户的 SQL 语句
        const sql = 'insert into ev_users set ?'
        //调用db.query() 执行SQL语句
        db.query(sql, {username: userinfo.username, password: userinfo.password}, (err, results)=>{
          //判断SQL语句是否执行成功
          // if(err) return res.send({ status: 1, message: err.message})
          if(err) return res.cc(err)  //代码优化
          //判断影响行数是否为1 判断受影响的行数（affectedRows）看其值是否为1 如果不是1就表示更新失败 如果值等于1就表示更新成功
          // if(results.affectedRows !== 1) return res.send({ status: 1, message: '注册用户失败， 请稍后再试！'})
          if(results.affectedRows !== 1) return res.cc('注册用户失败， 请稍后再试！')   //代码优化
          //注册用户成功
          // res.send({ status: 0, message: '注册成功！'})
          res.cc('注册成功！', 0)    //代码优化
        })
      })
  }
  
 
  
  // 登录的处理函数
  exports.login = (req, res) => {
    // res.send('login OK')
    const userinfo = req.body
    const sql = `select * from ev_users where username=?`
    db.query(sql, userinfo.username, function (err, results) {
      // 执行 SQL 语句失败
      if (err) return res.cc(err)
      // 执行 SQL 语句成功，但是查询到数据条数不等于 1
      if (results.length !== 1) return res.cc('登录失败！')
      // TODO：判断用户输入的登录密码是否和数据库中的密码一致
      // 拿着用户输入的密码,和数据库中存储的密码进行对比
      const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
      // 如果对比的结果等于 false, 则证明用户输入的密码错误
      if (!compareResult) {
        return res.cc('登录失败！')
      }
      // TODO：登录成功，生成 Token 字符串
      // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
      const user = { ...results[0], password: '', user_pic: '' }      //...result[0]将用户的信息展开并且将password和user_pic的值给覆盖掉提高token的安全性
      //console.log(user);
      // 生成 Token 字符串
      const tokenStr = jwt.sign(user, config.jwtSecretKey, {
       expiresIn: '1h', // token 有效期为 10 个小时
      })
      //console.log(tokenStr);
      res.send({
       status: 0,
       message: '登录成功！',
       // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
       token: 'Bearer ' + tokenStr,
      })
    })
  }