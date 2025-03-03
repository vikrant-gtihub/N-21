const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/user.controllers')
const usermiddleware = require('../middlewares/user.middleware')

router.get('/register',userControllers.registerView)
router.post('/register',userControllers.registerUser)
router.get('/login',userControllers.loginView)
router.post('/login',userControllers.loginUser)


module.exports = router