const express = require("express");
const router = express.Router();
const usercontrollers = require("../controllers/user.controllers");
const jwt = require("jsonwebtoken");

router.get("/register", usercontrollers.registeruser);
router.post("/register", usercontrollers.registerUser);
router.get("/login", usercontrollers.login);
router.post("/login", usercontrollers.loginuser);
router.get(
  "/profile",
  function (req, res, next) {
    const token = req.cookies.token;
    if (!token) {
     return res.send("token not found");
    }
     try{
        const decoded = jwt.verify(token, "secretTokenKey");
        req.user = decoded;
        next();
     }
     catch(err){
        return res.send('invalid token')
     }
  },
  usercontrollers.getProfile
);
module.exports = router;
