/**
 * Created by fudongxin on 2017/11/22.
 */
const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')


exports.User = mongolass.model('User', {
    name: { type: 'string'},
    password: { type: 'string'},
    avatar: {type: 'string'},
    gender: { type: 'string', enum: ['m', 'f', 'x']},
    bio: { type: 'string'}
})


// 根据用户名找到用户，用户名全局唯一
exports.User.index({ name: 1}, {unique: true}).exec()




// 根据 id 生成创建时间 created_at
mongolass.plugin('addCreatedAt', {
    afterFind: function (results) {
        results.forEach(function(item) {
            item.create_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm')
        })
        return results
    },
    afterFindOne: function (result) {
        if (result) {
            result.create_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm')
        }
        return result
    }
})

// // 只存储文章的作者 id、标题、正文和点击量这几个字段
exports.Post = mongolass.model('Post', {
    author: { type: Mongolass.Types.ObjectId },
    title: { type: 'string' },
    content: { type: 'string' },
    pv: { type: 'number' }
})
exports.Post.index({ author: 1, _id: -1 }).exec()// 按创建时间降序查看用户的文章列表

// 留言相关
// exports.Comment = mongolass.model('Comment', {
//     author: {type: Mongolass.Types.ObjectId },
//     content: {type: 'string'},
//     postId: {type: Mongolass.Types.ObjectId }
// })
// // 通过文章 id 获取该文章下所有留言，按留言创建时间升序
// exports.Comment.index({ postId: 1, _id: 1}).exec()

exports.Comment = mongolass.model('Comment', {
    author: { type: Mongolass.Types.ObjectId },
    content: { type: 'string' },
    postId: { type: Mongolass.Types.ObjectId }
})
exports.Comment.index({ postId: 1, _id: 1 }).exec()// 通过文章 id 获取该文章下所有留言，按留言创建时间升序