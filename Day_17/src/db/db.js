const mongoose = require('mongoose')
function connect(){
    mongoose.connect('mongodb://localhost:27017/dataAssociation').then(function(){
        console.log('connected to server successfully')
    }).catch(function(err){
        console.log(err)
    })
}
module.exports = connect