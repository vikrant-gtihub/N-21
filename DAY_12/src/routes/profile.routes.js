const express = require('express')
const router = express.Router()

router.get('/hello',function(req,res){
    res.send('contolller of profile routes family called')
})

module.exports = router