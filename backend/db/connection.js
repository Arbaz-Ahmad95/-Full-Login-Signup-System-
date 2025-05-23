const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb");  // change mydb to your DB name
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection error", err);
  }
};

module.exports = connectDb;
