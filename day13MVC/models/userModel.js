const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  // gender: {
  //   type: String,
  //   require: true,
  // },
  // hobby: {
  //   type: Array,
  //   require: true,
  // },
  // image: {
  //   type: String,
  //   require: true,
  // },
});

const UserModel = mongoose.model("userData", userSchema);

module.exports = UserModel;
