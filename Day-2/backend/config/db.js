const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userDB");
    console.log("MongoDB connected..");
  } catch (err) {
    console.error("MongoDBb connection error", err.message);
    process.exit(1);
  }
};

module.exports=connectDB