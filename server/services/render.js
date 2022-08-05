const axios = require("axios");


exports.index = (req, res) => {
  res.render("index");
}

exports.about = (req, res) => {
  res.render("about");
}
exports.indexEdit = (req, res) => {
  res.render("index-edit");
}
exports.login = (req, res) => {
  res.render("login");
}
exports.newsCreate = (req, res) => {
  res.render("news-create");
}
exports.newsDetail = (req, res) => {
  res.render("news-detail");
}
exports.newsEdit = (req, res) => {
  res.render("news-edit");
}
exports.news = (req, res) => {
  res.render("news");
}
exports.productCreate = (req, res) => {
  res.render("product-create");
}
exports.productDetail = (req, res) => {
  res.render("product-detail");
}
exports.productEdit = (req, res) => {
  res.render("product-edit");
}
exports.product = (req, res) => {
  res.render("product");
}
exports.register = (req, res) => {
  res.render("register");
}
exports.userCart = (req, res) => {
  res.render("user-cart");
}
exports.userFavorites = (req, res) => {
  res.render("user-favorites");
}
exports.userManageEdit = (req, res) => {
  res.render("user-manage-edit");
}
exports.userManageList = (req, res) => {
  res.render("user-manage-list");
}
exports.userOrderList = (req, res) => {
  res.render("user-order-list");
}
exports.userOrder = (req, res) => {
  res.render("user-order");
}
exports.userProfile = (req, res) => {
  res.render("user-profile");
}