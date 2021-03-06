const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
  // 用户名
  username: {
    type: String,
    required: [true, '用户名不能为空'],
    unique: true,
    maxlength: [20, '用户名不能超过20个字符']
  },

  // 用户密码的Hash值
  passwordHash: String,

  // 用户创建时间
  createTime: {
    type: Date,
    default: Date.now
  },

  // 用户类型：1普通用户，2管理员
  userType: {
    type: Number,
    default: 1
  },

  todos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Todo'
  }],
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// 使用'mongoose-unique-validator'插件校验唯一（unique）字段
userSchema.plugin(uniqueValidator, {
  message: '该用户名已存在'
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
