const jwt = require("jsonwebtoken");
module.exports.validateUser = function (req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({
        message: "unauthorized",
      });
    }
    const decoded = jwt.verify(token, "data-association-secret-key");
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "unauthorized",
    });
  }
};
