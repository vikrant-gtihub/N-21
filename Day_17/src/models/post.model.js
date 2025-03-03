const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    media:{
        type:String
    },
    caption:{
        type:String
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:'usermodel'
    }
})
const postmodel = mongoose.model('postmodel',postSchema)
module.exports = postmodel