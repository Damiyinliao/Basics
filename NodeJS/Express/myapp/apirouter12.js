const express = require('express')

const router = express.Router()

router.get('/get', (req, res)=>{
    const query = req.query
    res.send({
        status: 0,    // 0表示成功 1表示失败
        msg: 'GET请求成功',
        date: query
    })
})


router.post('/post', (req, res)=>{
    // 获取客户端通过请求体， 发送到服务器的 URL-encoded 数据
    const body = req.body
    res.send({
        status: 0,      // 0表示成功 1表示失败
        msg: 'POST请求成功',     //状态描述信息
        date: body
    })
})
router.delete('/delete', (req, res)=>{
    // 获取客户端通过请求体， 发送到服务器的 URL-encoded 数据
    const body = req.body
    res.send({
        status: 0,      // 0表示成功 1表示失败
        msg: 'DELETE请求成功',     //状态描述信息
        date: body
    })
})

module.exports = router