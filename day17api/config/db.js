const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect("mongodb://127.0.0.1/Avengers");
  console.log("database connected")
};

module.exports = connection
