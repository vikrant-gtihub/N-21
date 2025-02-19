const mongoose = require('mongoose')
function connect(){
    mongoose.connect('mongodb://localhost:27017/n-21-auth-author').then(function(){
        console.log('database connected to server successfully')
    }).catch(function(err){
        console.error(err)
    })
}
module.exports = connect