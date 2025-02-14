const express = require('express')
const router = express.Router()

router.get('/',function(req,res){
    res.send('slash page requested')
})

router.get('/mypage',function(req,res){
    res.send('slash  mypage requested')
})

module.exports = router