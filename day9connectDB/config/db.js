const mongoose = require("mongoose");

const connection = async () => {
  // promise
  await mongoose.connect("mongodb://127.0.0.1/harpal"); // collection name is harpal //mongodb://localhost:27017
  console.log("database connected")
};

module.exports = connection;
