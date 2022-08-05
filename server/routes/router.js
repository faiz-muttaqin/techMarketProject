const express = require("express");
const route = express.Router();
const services = require("../services/render");
// const controller = require("../controller/controller");
const userController = require("../controller/userController");
const aboutController = require("../controller/aboutController");
const cartController = require("../controller/cartController");
const contactController = require("../controller/contactController");
const favoritesController = require("../controller/favoritesController");
const indexController = require("../controller/indexController");
const newsController = require("../controller/newsController");
const orderController = require("../controller/orderController");
const productController = require("../controller/productController");


//renderweb
route.get("/", services.index);
route.get("/about", services.about);
route.get("/indexEdit", services.indexEdit);
route.get("/login", services.login);
route.get("/newsCreate", services.newsCreate);
route.get("/newsDetail", services.newsDetail);
route.get("/newsEdit", services.newsEdit);
route.get("/news", services.news);
route.get("/productCreate", services.productCreate);
route.get("/productDetail", services.productDetail);
route.get("/productEdit", services.productEdit);
route.get("/product", services.product);
route.get("/register", services.register);
route.get("/userCart", services.userCart);
route.get("/userFavorites", services.userFavorites);
route.get("/userManageEdit", services.userManageEdit);
route.get("/userManageList", services.userManageList);
route.get("/userOrderList", services.userOrderList);
route.get("/userOrder", services.userOrder);
route.get("/userProfile", services.userProfile);




//API
// route.post("/api/users", controller.create);
// route.get("/api/users", controller.find);
// route.put("/api/users/:id", controller.update);
// route.delete("/api/users/:id", controller.delete);

module.exports = route;