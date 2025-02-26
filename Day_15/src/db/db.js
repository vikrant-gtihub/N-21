const mongoose = require("mongoose");
function connect() {
  mongoose
    .connect("mongodb://localhost:27017/n-21_cookies")
    .then(function () {
      console.log("server is connected to databse successsfully");
    })
    .catch(function (err) {
      console.log(err);
    });
}
module.exports = connect;
