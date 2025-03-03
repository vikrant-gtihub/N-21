const express = require('express')
const app = express()
const postrouter = require('./routes/post.routes')
const userrouter = require('./routes/user.routes')
const cookieParser = require('cookie-parser')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/user',userrouter)
app.use('/post',postrouter)
module.exports = app

/**
 * 1.is tutorial me humne data association padha jisme ki ek model ko dusre se intergate kiya jata hai
 *   by sharing of id's taki unhe ek dusre ke bare me pata ho
 * 
 * 2.sabse pahle basic setup kar liya older structure (user) family ke routes me register,login,and
 *   allposts ke routes hain un sabke respective controllers hain. humne register aur login ke form
 *    ejs se dikhayen hain aur unke through register aur login kiya hai humne allposts wale route ko
 *    protected rakha hai by using the middleware
 * 
 * 3.ek aur route family hai (post) jisme ki post create hoti hai aur (getallposts) se sabhoi post access 
 *   ki jati hai yahan data association ka concept aise introduce hua ki
 *   postmodel me jo schema hai usem media aur caption se post create hoti hai aur sath hi
 *   usermodel me username,email,password se create hoti hai par abhi databse dekhkar ye nahi bataya ja 
 *   sakta ki kaun se user ne kitni posts create ki hain n hi ye batay ja sakta ki kis post ko kaun se user ne 
 *   create kiya hai..
 * 
 * 4. data association ka matlab hai ki dono ko id sharing ke madhyam se ye jankari dena
 * 5. data associastion me user ke pass ek array hoga uske dwara created sabhi posts ka aur har ek post
 *    pass ek attribute hoga author jiseme us user ki id hogi jisne unhe create kiya hoga jo array user
 *    ke pas hai usme bhi sabhi posts ki id hi hogi.. but for right now abhi humne sirf half data association
 *    use kiya hai abhi har ek postke pas author field to hai lekin user ke pas array nahi hai further tutorials me
 *     ye cheej cover hogi
 * 
 * 6.postschema me humne author field dali hai jisme ki {type:mongoose.Schema.Types.Objectid} hai ye id ka
 *   type hota hai aur ref dena hota hai us model ke nam ka jiski id ye hold karta hai since posts hold karengi
 *   usermodel ka to wahi name diya hai
 *   abhi humne username me nuique;true use kiya hai uska matlab ye hai ki ab databse me same username se
 *   ek se jyada users create nahi ho paynge agar koshish ki to repeating key ka error aa jata hai.
 * 
 * 7.ab jub hum allposts get karte hain aur ejs page me bhejte hain render hone ke liye to wahn par 
 *   humne find() ke bad .populate() ka use kya hai isse hota ye hai ki agar .populate('x) likha iska matlab hua
 *   ki ('x) jo ki ek reference hai kisi document ka is reference ko us actual data se repl;ace karo
 *   taki hum username bhi dikh saken jise isne create kiya hoga 
 */