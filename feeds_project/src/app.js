const express = require("express");
const app = express();
const usermodel = require("./models/usermodel");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/create", async function (req, res) {
  const { username, email, password, profile } = req.body;
  let createduser = await usermodel.create({
    username,
    email,
    password,
    profile,
  });
  res.redirect("/feed");
});

app.get("/feed", async function (req, res) {
  let allusers = await usermodel.find();
  res.render("feed", { users: allusers });
});

module.exports = app;
