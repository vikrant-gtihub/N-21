const express = require("express");
const router = express.Router();
const indexcontroller = require("../controllers/index.controller");

router.get("/", indexcontroller.slashcontroller);
router.get("/profile", indexcontroller.profilefunction);

module.exports = router;
