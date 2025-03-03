const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usermodel = require('../models/user.model')
const { use } = require('../app')
module.exports.registerView = function(req,res){
    res.render('registerpage')
}

module.exports.registerUser = async function(req,res){
    const {username,email,password} = req.body
    const hash = await bcrypt.hash(password,10)
    const user = await usermodel.create({
        username,
        email,
        password:hash
    })

    const token = jwt.sign({id:user._id,username},'data-association-secret-key')
    res.cookie('token',token)
    res.status(200).json({
        user,token
    })
}

module.exports.loginUser = async function(req,res){
    const {email,password} = req.body
    const user = await usermodel.findOne({email})
    if(!user){
        return res.status(400).json({
            message:'invalid email'
        })
    }
    const isMatch = bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({
            message:'invalid password'
        })
    }
    const token = jwt.sign({id:user._id,username:user.username},'data-association-secret-key')
    res.cookie('token',token)
    res.status(200).json({
        user,token
    })
}

module.exports.loginView = function(req,res){
    res.render('loginpage')
}

module.exports.allpostspage = function(req,res){
    res.render('allPosts')
}