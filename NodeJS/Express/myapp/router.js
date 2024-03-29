
//路由模块演示 Router

//导入express
const express = require('express')

//创建路由对象
const router = express.Router()

//挂载具体的路由
router.get('/user/list', (req, res)=>{
    res.send('Get user list.')
})

router.post('/user/add', (req, res)=>{
    res.send('User add')
})

//向外导出路由对象
module.exports = router