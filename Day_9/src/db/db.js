const mongoose = require('mongoose')
 function connect(){
    mongoose.connect('mongodb://localhost:27017/n21').then(function(){
        console.log('server connected with database')
    }).catch(function(err){
        console.log(err)
    })
 }
 module.exports = connect