const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const usermodel = mongoose.model('postUsers',userSchema)
module.exports = usermodel