const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    age:{
        type:Number,
    },
    email:{
        type:String
    }
})

const usrschema = new mongoose.model('users',userSchema)
module.exports = usrschema