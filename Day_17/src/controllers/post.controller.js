const postmodel = require('../models/post.model')
module.exports.createpostPage = function(req,res){
    res.render('postcreateForm')
}

module.exports.createPost = async function(req,res){
    const {media,caption} = req.body
    const post = await postmodel.create({
       media,
       caption,
       author:req.user.id
    })
    res.status(200).json({
        post
    })
}

module.exports.getallposts = async function(req,res){
    const postsarr = await postmodel.find().populate('author')
    res.render('allPosts',{postsarr})
}