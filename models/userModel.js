const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
const userSchema = new Schema({
    username: {
        type: String,
        unique: true, 
        required: true
    },
    
    password: {
        type: String,
        required: true
    },

    avatar: {
        type: String,
        required: false
    }
})

userSchema.pre('save', function(next){
    const { password } = this
    const salt = bcrypt.genSaltSync(10)
    if(this.isModified("password")){
        this.password = bcrypt.hashSync(password, salt)
    }
    next()
})

module.exports = mongoose.model('user', userSchema)