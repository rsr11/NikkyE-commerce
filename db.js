const mongoose = require("mongoose");
const env = require("dotenv");

const mongoURL = "mongodb+srv://rockysingh:7la9zUY5xG5TsZ3L@nikeshop.lkpcsrp.mongodb.net/";


const connectToMongo = async ()=>{
    await mongoose.connect(mongoURL);
    console.log("connected to mongo");
}
// 7la9zUY5xG5TsZ3L - password
// rockysingh - username

module.exports = connectToMongo;