const usermodel = require('../models/users.models')
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { emit } = require('../app')

/**
 *register APi ka flow aise hota hai ki pahle password ko hash karke database me user create
    karte hain fir token generate karke login karwa diya jata hai
 */
module.exports.registerController = async function(req,res){
  const {username,email,password} = req.body
  const hash = await bcrypt.hash(password,10)
  const user = await usermodel.create({
     username,
     email,
     password:hash
  })
  const token = jwt.sign({id:user._id,password},'secret')
  res.status(200).json({
    user,token
  })
}

/**
 * login api ka flow aisa hota hai ki pahle check kiya jata hai ki kya is email se user mil raha hai y
 *  nahi phir agar user mil gaya to uska password check kiya jata hai aur tab fir token generate kiya 
 * jata hai
 */
module.exports.loginUserController = async function(req,res){
    const {email,password} = req.body

    const user = await usermodel.findOne({email})
    if(!user){
       return res.status(400).json({
            message:"user not found"
        })
    }
   const matchpassword = await bcrypt.compare(password,user.password)
   if(!matchpassword){
    return res.status(400).json({
        message:'invalid password'
    })
   }
   const token = jwt.sign({id:user._id,password},'secret')
  res.status(200).json({
    user,token
  })
}

/* ise ek protected route rakha gaya hai jise har koi access nahi kar sakta sirf loggedin user
   hi ise open kar sakte hain isliye jakar routes wali file me ika code flow samjho */
module.exports.profileController = function(req,res){
    res.send('profile page is rendered')
}

/**.................................................NOTES.............................................
 * 1.databse me passwword ko hash karke save kiya jata hai kabhi original shandon me nahi kyuki agar wo
 *   password hacker ke hath lag gaya to fir uska misuse karke account bhi hack kar sakta hai aur hashing
     se ek nadi se random (well calculated using hashing alorithm) generate hoti hai jisse decrypt karke
    fir original password me convert kiya nahi ja sakta hai jisse security make sured hoti hai
 * 
 * 
 * 2....bcrypt.hash(password,10)... yahan 10 likhne ki wk wajah hai jab databse me passowrd ko hash kiya jata hai
 *                            to bcrypt ek salt deta hai (random string) jo ki password string ke sath
 *  add hota hai aur hashed password ko generate karta hai to jitni bar ye process hoti hai utna time consuming
 * hoti hai aur utni adhik security milti hai iliye 10 ek balanced number hai 10 salts rounds ke bad
 * ye make sured hota hai ki ab agar do users same password bhi dal den to bhi unka hash alag hoga
 * 
 * 
 * 3...bcrypt.. ke operations ek promise return karte hain aur 
 * jwt and bcrypt ke operations ko cryptographic operations kaha jata hai matlab ki wo operations
 * jo CPU me directly nahi chalte system me specific environments me chakte hain isliye slow hote hain
 * 
 * 
 * 4.jwt.sign({id:user._id,password},'secret')
 * is case me secret ek payload wo object hota hai jiske basis par hum token generate akrna chhate hain
 * generally hum un properties ka use karte hain jo ki har ek user ke liye unique hoti hain aur 'secret'
 * ek string key hoti hai production level par ise bahut secure rakha jata hai alag file banakr .env
 * extension ki par local development ke liye kuchh bhi rakh sakte hain .. ye key server chhodkar nahi
 * jani chahiye aur ise bahut safe rakhna chahiye kyuki isi key ke sath hash karke payload ko ek token 
 * generate kiya jata hai
 * 
 * 
 * 5.res.status(code)...ka kam hai server.status code set akrna matlab ki humari request ka kya hua
 *   ye represent karna jaise 200 ka matlab sab kuchh sahi se hua request chal gayi 
 *   .400 ka matlab hai ki client side par request me kuchh gadbad ki gayi jaise url ka nam galat ho gaya ho
 *   .500 ka matlab hai ki server side par koi galti hai
 *   .404 ka matlab hai requested resource not found  
 * . 401 unauthorized error
 *   201 - Created: Koi naya resource create ho gaya (e.g., user register hua).
 *   iske bad json format me hum apna data bhej dete hain
 *  ise return ke sath isliye likhte hain taki aage ka koi response phir n chale aur aage ka code n chale
 *  screen par sirf ye response chala jaye and that is it
 */