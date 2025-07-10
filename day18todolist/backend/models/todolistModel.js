const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema({
  task: {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    type: String,
    require: true,
  },
});

const TodolistModel = mongoose.model("todolist", todolistSchema);

module.exports = TodolistModel;
