//is file ka kam hai express server ko configure karna..matlab ki pura form karna aur server start hoga server.js file me

const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('backedn server on app.js file')
})

module.exports = app

/**
 * 1.is tutorial me humne databse aur express ke server ke sath kam karne ka industry standard tareeka seekha hai
 * 2. sabse pahle hum root level par ..server.js... file banate hain jiske do kam hai ek to express ka server start karna aur dusra hai database se connect karna
 * 3.hum src ke andar ek app.js me express ka sara code likhte hain aur app ko yahanh se export karke server.js me use import karke fir server chalate hain
 * 4.similarly hum src ke andar ek db namak folder bnanakar db.js banate hain aur fir usme monogoose rteqyire karte hain jo ki ek package
 *   hai jo ki express server ko databse ke server se connect karne me madad karta hai 
 * 5.wahan par ek connect function banakar server file ke andar us function ko call karte hain
 * 6.us line ka jo function ke andar hai uska matlab ye hai ki mongodb protocal se localhost yani ki localsystem par maujad clutser se
 *  27017 port par n21 nam se ek onnect karo aur yadi n21 pahle se maujad nahi hua to ye line naya server banakar ke fir connection kar deti hai
 */