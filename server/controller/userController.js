var Userdb = require("../model/userModel");

// create and save new user
exports.create = async (req, res) => {
  // validate request, jika kosong maka mengirim message "Content can not be emtpy!"
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be emtpy!" });
  }
  try {
    let { first_name, last_name, username, email, password, phone, gender, birth, adress, type_user, token } = req.body
    if( !first_name || !last_name || !username || !email || !password || !phone || !gender || !birth || !adress || !type_user ||!token) {
      res.status(400).send({
        message: "wrong datas",
        statusCode: 400
      })
    } else {
      try {
        // check data from database
        let userCheck = await Userdb.findOne({username: username, email: email})
        if (userCheck) {
          res.status(400).send({
            message: "Username or Email Has Registered.",
            statusCode: 400
          })
        } else {
          // encrypt password
          //create user
          let createUser = await Userdb.create({
            first_name: first_name, last_name: last_name, username: username, email: email,
            password: password, phone: phone, gender: gender, birth: birth, adress: adress,
            type_user: type_user, token: token
          })
          console.log(createUser)
          res.status(200).send({
            message: "success to create data user...",
            statusCode: 200,
            data: createUser
          })
        }
      } catch (err) {
        console.log(err)
        res.send(err.message)
      }
    }
  } catch (err) {
  console.log(err)  
  }
};

// retrieve and return all users/ retrive and return a single user
exports.find = async (req, res) => {
  if(req.query.id) {
    const id = req.query.id
    let findId = await Userdb.findById(id)
    try {
      // get data user by id
      if(!findId) {
        res.status(400).send({
          message:"data not found...",
          statusCode: 200
        })
      } else {
        res.send(findId)
      }
    } catch (err) {
    console.log(err)
    } 
  } else {
    try {
      // get data all users
      let getUser = await Userdb.find()
      res.send(getUser)
    } catch (err) {
      console.log(err)
      res.send(err.message)
    }
  }
};

// Update a new idetified user by user id
exports.update = async (req, res) => {
  // inisialisasi
  if (!req.body) {
    return res.status(400).send({message: "data can't empty..."})
  }
  try {
    const id = req.params.id
    let updateUser = await Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    if(!updateUser) {
      res.status(404).send({message:`can't update user with id ${id}. maybe user not found`})
    } else {
      res.status(200).send({
        message: "success update user",
        data : updateUser
      })
    }
  } catch (err) {
    console.log(err)
  }
};

// Delete a user with specified user id in the request
exports.delete = async (req, res) => {
  let id = req.params.id
  try {
    let data = await Userdb.findByIdAndDelete(id)
    if(!data) {
      res.status(400).send({
        message: `can't delete user with id ${id}. maybe id wrong...`
      })
    } else {
      res.send({
        message: "user was deleted successfully..."
      })
    }
  } catch (err) {
    console.log(err)
    res.send(err.message)
  }
};
