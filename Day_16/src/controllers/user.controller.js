const usermodel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports.registerUserControllerview = function (req, res) {
  res.render("userRegister");
};

module.exports.registerUser = async function (req, res) {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const user = await usermodel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign({ id: user._id, password: hash }, "secretlogin");
  res.cookie("token", token);
  res.send({ token, user });
};

module.exports.loginpage = function (req, res) {
  res.render("login");
};
module.exports.loginUser = async function (req, res) {
  const { email, password } = req.body;
  const user = await usermodel.findOne({ email });
  if (!user) {
    res.send("user not found");
  }
  const ismatched = bcrypt.compare(password, user.password);
  if (!ismatched) {
    res.send("invalid password or email");
  } else {
    const token = jwt.sign(
      { id: user._id, password: user.password },
      "secretlogin"
    );
    res.cookie("token", token);
    res.send({ token, user });
  }
};

module.exports.profile = function (req, res) {
  res.send("profile page");
};
