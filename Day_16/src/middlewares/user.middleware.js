const jwt = require('jsonwebtoken')
module.exports.validatefun = function (req, res, next) {
  const { token } = req.cookies;
  try {
    const decoded = jwt.verify(token, "secretlogin");
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.send("unauthorized");
  }
};
