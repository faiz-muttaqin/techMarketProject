const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    news_id : {
        type : String,
        required: true
    },
    user_id : {
        type : String,
        required: true
    },
    username : {
        type : String,
        required: true
    },
    comment : {
        type: String,
        required: true
    },
    timestamp : {
        type: BigInt,
        required: true
    }
})

const commentsdb = mongoose.model('comments', schema); // document name product

module.exports = commentsdb;