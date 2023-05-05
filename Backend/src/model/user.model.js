const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var User = new Schema(
  {
    firstname: String,
    lastname: String,
    password: String,
    resume: String,
    country: String,
    gender: String,
    email: String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
