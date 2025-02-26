const express = require("express");
const app = express();
const userroutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", userroutes);

module.exports = app;

/**
 * 1.is tutorial me humne padha ki browser me token set karte hain jo ki authorization ke liye use hota hai
 * 2.token ko browser me set karne ke liye ek storage hoti hai cookies jahan par rakha gaya data browser se
 * ko gayi har ek request me req.cookies me aata hai
 * 3.ek packange install karna hai  cookie-parser  iski madad se cookie ko read kiya jata hai to jab hi
 *   hum login ya register karte time token create karte the bas at the same time token ko browser pe set
 *   karne ke liye likhna hai res.cookie("cookiename","cookievalue/token")
 * 4.is cookie ko padhne ke liye hum app.use(Cookieparser()) middleware ka use karte hain
 * 5.ab protected route ka flow kuchh aisa hota hai ki sabse pahle token ko read karo req.cookies se yadi
 * token n mile to res.send(token not found) ab yadi token mil bhi gaya to agar wo galat hai to jwt.verify
 * se payload milne ki jagaha par error mil jata hai isliye use try block me rakhte hain fir error ko catch
 * block me capture karte hain.
 */
