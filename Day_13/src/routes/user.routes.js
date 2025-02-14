const express = require("express");
const router = express.Router();

router.get("/page", function (req, res) {
  res.send("page is rendered");
});

module.exports = router;
