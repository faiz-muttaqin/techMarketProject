var faforitesdb = require("../model/favoritesModel");

// create and save new user
exports.create = (req, res) => {
  // validate request, jika kosong maka mengirim message "Content can not be emtpy!"
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }
};

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {};

// Update a new idetified user by user id
exports.update = (req, res) => {};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {};
