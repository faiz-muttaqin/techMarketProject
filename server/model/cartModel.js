const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user_id : {
        type : String,
        required: true
    },
    product_id : {
        type : String,
        required: true,
        unique: true
    },
    cart_number : {
        type : String,
        required: true
    },
    data_date : {
        type: BigInt,
        required: true
    }
})

const cartdb = mongoose.model('cart', schema); // document name cart

module.exports = cartdb;