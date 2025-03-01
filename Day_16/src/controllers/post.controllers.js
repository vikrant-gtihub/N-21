const postmodel = require('../models/post.model')
module.exports.getpost = function(req,res){
    res.render('postView')
}

module.exports.createpost = async function(req,res){
    const {media,caption} = req.body
    const newpost = await postmodel.create({
        media,
        caption
    })
    res.send(newpost)
}