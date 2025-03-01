const express = require("express");
const router = express.Router();
const postcontroller = require("../controllers/post.controllers");
const validusermiddleware = require("../middlewares/user.middleware");

router.get("/post", validusermiddleware.validatefun, postcontroller.getpost);
router.post(
  "/create",
  validusermiddleware.validatefun,
  postcontroller.createpost
);
module.exports = router;
