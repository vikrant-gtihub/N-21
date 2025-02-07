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
  profile: {
    type: String,
  },
});
const usermodel = new mongoose.model("Users", userSchema);
module.exports = usermodel;
