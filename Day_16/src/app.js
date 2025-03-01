const express = require("express");
const app = express();
const userrouter = require("./routes/user.router");
const postrouter = require("./routes/post.router");
const cookieparser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieparser());
app.use("/user", userrouter);
app.use("/post", postrouter);

module.exports = app;

/**
 * 1.is tutorial me humne dekha ki kaise ...middleware ko  (src) ke andar ek (middlewares) folder ke andar
 *   rakhte hain aur wahan par sare middlewares banakr ke export kiye jate hain taki agar ek middleware
 *   ko multiple jagah use karna ho to wah reuseability make sure ho in addition
 *
 * 2.humne ye bhi dekha ki kaise ek se jyada models banaye jate hain ek probecjt me yahan par postmodel bhi
 * ek model hai aur kis user ko post wala page get karne ke liye i mean UI get karne ke liye ya fir post
 *  create karne ke liye loggedin hona jaruri hai it means ki uske pas ek valid token ka hona jaruri hai isliye
 *  humne har jaga use protected route banay hai aur sirf valid user ko hi token check karke un routes ka
 *  access diya hai.
 *
 */
