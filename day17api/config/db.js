const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect("mongodb+srv://rwa3prabhatdk:prabhat123@cluster0.nsnamii.mongodb.net/avengersDB?retryWrites=true&w=majority&appName=Cluster0");
  console.log("database connected")
};

module.exports = connection
