mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/User")
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;

//
