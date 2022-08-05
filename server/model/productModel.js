const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sales: {
    type: Number,
    required: true,
  },
  rating_avg: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
});

const productdb = mongoose.model("product", schema); // document name product

module.exports = productdb;
