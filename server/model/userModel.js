const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: String,
  birth: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  type_user: {
    type: String,
    required: true,
    default: 2,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
});

const Userdb = mongoose.model("user", schema); // document name user

module.exports = Userdb;
