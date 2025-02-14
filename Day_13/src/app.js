const express = require("express");
const app = express();
const indexrouter = require("./routes/index.routes");
const userrouter = require("./routes/user.routes");

app.use("/index", indexrouter);
app.use("/user", userrouter);

module.exports = app;
/**
 * 1.in addition to ..routes... folder jahan par alag alag routes families ke liye alag alag files banti hai
 *   humare pas ek ..controllers... folder bhi hoga to jo code hum execute karte hain kisi bhi roue ke hit hone
 *   pe wo hum directly ....router.get('/something')...ke sath likhne ki jagah hum ek alag folder me rakhte hain jaise
 *   yahn par humne ....index.controller.js... banayi hai aur usme se multiple fucntions ko ek sath object ke fomr me export kiya
 *   hai fir hum jis wale function ko execute karna chahte the kisi route ke hit hone par uska nam likh diya hai routes. wali file me  
 * 
 */