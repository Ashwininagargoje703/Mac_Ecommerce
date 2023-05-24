const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv://ashwini:ashwini1234@cluster0.seroub9.mongodb.net/Shopping-store"
  );
};
module.exports = connect;
