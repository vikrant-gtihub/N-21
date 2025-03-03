const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
      type:String
    }
})
const usermodel = new mongoose.model('usermodel',userSchema)
module.exports = usermodel