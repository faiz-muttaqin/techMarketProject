const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI)
        // Mongoose 6 always behaves as if useNewUrlParser , useUnifiedTopology , 
        //  and useCreateIndex are true , and useFindAndModify is false . so its deleted/not used
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB