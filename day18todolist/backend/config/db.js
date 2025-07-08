const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect(process.env.MONGO_DB);
  console.log("database is connected");
};

module.exports = connection;
