const mongoose = require('mongoose')

function connect(){
    mongoose.connect('mongodb://localhost:27017/new-n21').then(function(){
        console.log('connected to mongodb')
    })
    .catch(function(err){
        console.log(err)
    })
}

module.exports = connect