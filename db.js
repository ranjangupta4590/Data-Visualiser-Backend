const mongoose = require("mongoose");
require('dotenv').config(); 
// console.log(url);
const dataArray=require('./models/Data');
const ProductJson=require('./jsondata.json')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    });
    await dataArray.create(ProductJson);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
