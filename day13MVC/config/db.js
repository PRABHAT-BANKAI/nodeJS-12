const mongoose = require("mongoose");

const connection = async () => {
await mongoose.connect("mongodb://127.0.0.1/darshan")// collection create 
console.log("database connected successfully")

};


module.exports = connection
