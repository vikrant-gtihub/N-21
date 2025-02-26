const usermodel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.registeruser = function (req, res) {
  res.render("index");
};

module.exports.registerUser = async function (req, res) {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await usermodel.create({
    username,
    email,
    password: hash,
  });
  const token = jwt.sign({ id: user._id, email }, "secretTokenKey");
  res.cookie("token", token);
  res.send({ token, user });
};

module.exports.login = function (req, res) {
  res.render("login");
};

module.exports.loginuser = async function (req, res) {
  const { password, email } = req.body;
  const user = await usermodel.findOne({ email: email });
  if (!user) {
    return res.status(401).send("user not found");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    res.status(401).send("invalid credentials");
  } else {
    const token = jwt.sign({ id: user._id, email }, "secretTokenKey");
    res.cookie("token", token);
    res.send({ token, user });
  }
};

module.exports.getProfile = function (req, res) {
  res.send("profile page");
};
