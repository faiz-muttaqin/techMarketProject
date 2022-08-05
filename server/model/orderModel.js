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
    order_number : {
        type : String,
        required: true
    },
    data_date : {
        type: BigInt,
        required: true
    }
})

const orderdb = mongoose.model('order', schema); // document name order

module.exports = orderdb;