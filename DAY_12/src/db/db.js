const mongoose = require('mongoose')

function connect(){
   mongoose.connect('mongodb://localhost:27017/newserving').then(function(){
    console.log('connected to databse servere successfully')
   })
}

module.exports = connect