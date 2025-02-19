const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/user.controller')
const jwt = require('jsonwebtoken')

router.post('/register',userControllers.registerController)
router.post('/login',userControllers.loginUserController)
router.get('/profile',function(req,res,next){
    try{
        const token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.status(401).json({
            message:'invalid token'
        })
    }
    const decoded = jwt.verify(token,'secret')
    req.user = decoded
    }
    catch(err){
        return res.status(401).json({
            message:'invalid token'
        })
    }
    next()
},userControllers.profileController)
module.exports= router

/**
 * 1.request ke andar ek field hoti hai headers jahan par security wala data bheja jata hai jaise ki
 *   token bheja gaya is case me yahan par req ke headers me authentican field me hum token bhejte
 *    hain wo bhi 'bearer tokenstring' karke aisa islye kyuki pahle jab internet se data loss ho jata 
 *   tha usse bachne ke liye bearer prefix rahta tha ki agar ye loss bhi ho jaye to bhi humare pas tokn
 *   suraksit rahna chahiye
 * 
 * 2.flow aise chata hai jaise koi route protected route hai to wahan par route aur controller ke beech
 *  me ek function chala do jise ki middleware bhi kahte hain jisme ki pahle ye dekha jata hai ki token
 *  vaild hai y nahi agar valid hai to usme se wo sabhi info jo token creation ke liye payload me di gayi
 *  thi wo sab nikal li jati hai by the use of jwt.verify() and fir wo req ke andar ek user attribute me dal
 *  di jati hai and  next() ke call karne se control us cotroller tak jata hai jo middleware ke bad hai
 * 
 * 3.ab yadi man lo token hai hi nahi to headers field undefined hogi to aise me undefined ke aage .split()
 *   kahne se error aata hai isliye sara code try{} block me rakha fir catch() me error ko pakda taki 
 *  error ki wajah se app crash n ho
 */