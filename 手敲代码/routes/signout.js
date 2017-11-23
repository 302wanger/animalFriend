/**
 * Created by fudongxin on 2017/11/20.
 */
const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
    // 清空session中用户信息
    req.session.user = null
    req.flash('success', '退出成功')
    // 退出成功后去主页
    res.redirect('/posts')
})

module.exports = router