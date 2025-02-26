const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
const usermodel = mongoose.model("USRS", userSchema);
module.exports = usermodel;
