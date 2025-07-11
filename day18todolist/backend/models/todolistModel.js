const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

const TodolistModel = mongoose.model("todolist", todolistSchema);

module.exports = TodolistModel;
