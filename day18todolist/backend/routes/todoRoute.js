const express = require("express");
const TodolistModel = require("../models/todolistModel");

const todolistRouter = express.Router();

todolistRouter.post("/", async (req, res) => {
  try {
    await TodolistModel.create({ authorId: req.user._id, task: req.body.task });
    return res.status(201).json({
      message: "task added successfully",
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
});

todolistRouter.get("/", async (req, res) => {
  let authorId = req.user._id;

  try {
    let getAllData = await TodolistModel.find({authorId})

    return res.status(200).json({
      message: "success",
      todolist: getAllData,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
});

todolistRouter.put("/", (req, res) => {
  try {
  } catch (error) {}
});

todolistRouter.delete("/", (req, res) => {
  try {
  } catch (error) {}
});

module.exports = todolistRouter;
