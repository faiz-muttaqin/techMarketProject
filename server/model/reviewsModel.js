const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
});

const reviewsdb = mongoose.model("reviews", schema); // document name product

module.exports = reviewsdb;
