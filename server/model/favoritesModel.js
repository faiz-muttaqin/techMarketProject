const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  product_id: {
    type: String,
    required: true,
    unique: true,
  },
  data_date: {
    type: String,
    required: true,
  },
});

const favoritesdb = mongoose.model("favorites", schema); // document name favorites

module.exports = favoritesdb;
