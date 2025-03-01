const express = require("express");
const router = express.Router();
const usercontrollers = require("../controllers/user.controller");
const jwt = require("jsonwebtoken");
const validate = require("../middlewares/user.middleware");

router.get("/register", usercontrollers.registerUserControllerview);
router.post("/register", usercontrollers.registerUser);
router.get("/login", usercontrollers.loginpage);
router.post("/login", usercontrollers.loginUser);
router.get("/profile", validate.validatefun, usercontrollers.profile);
module.exports = router;
