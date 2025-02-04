const mongoose = require('mongoose')

function connect(){
    mongoose.connect('mongodb://localhost:27017/CRUD').then(function(){
        console.log('connected to mongodb successfully')
    }).catch(function(err){
        console.log('error occured while connecting to mongodb'+ err)
    })
}
module.exports = connect