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

//API product
route.post("/api/productController", productController.create);
route.get("/api/productController", productController.find);
route.put("/api/productController/:id", productController.update);
route.delete("/api/productController/:id", productController.delete);

//API user
route.post("/api/userController", userController.create);
route.get("/api/userController", userController.find);
route.put("/api/userController/:id", userController.update);
route.delete("/api/userController/:id", userController.delete);

//API order
route.post("/api/orderController", orderController.create);
route.get("/api/orderController", orderController.find);
route.put("/api/orderController/:id", orderController.update);
route.delete("/api/orderController/:id", orderController.delete);

//API news
route.post("/api/newsController", newsController.create);
route.get("/api/newsController", newsController.find);
route.put("/api/newsController/:id", newsController.update);
route.delete("/api/newsController/:id", newsController.delete);

//API favorites
route.post("/api/favoritesController", favoritesController.create);
route.get("/api/favoritesController", favoritesController.find);
route.put("/api/favoritesController/:id", favoritesController.update);
route.delete("/api/favoritesController/:id", favoritesController.delete);

//API cart
route.post("/api/cartController", cartController.create);
route.get("/api/cartController", cartController.find);
route.put("/api/cartController/:id", cartController.update);
route.delete("/api/cartController/:id", cartController.delete);

module.exports = route;
