const express = require('express')
const router = express.Router()
const usermiddlewares = require('../middlewares/user.middleware')
const postcontrollers = require('../controllers/post.controller')

router.get('/create',usermiddlewares.validateUser,postcontrollers.createpostPage)
router.post('/create',usermiddlewares.validateUser,postcontrollers.createPost)
router.get('/allposts',usermiddlewares.validateUser,postcontrollers.getallposts)
module.exports = router