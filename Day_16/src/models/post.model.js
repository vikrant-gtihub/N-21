const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    media:{
        type:String
    },
    caption:{
        type:String
    }
})
const postmodel = mongoose.model('posts',postSchema)
module.exports = postmodel