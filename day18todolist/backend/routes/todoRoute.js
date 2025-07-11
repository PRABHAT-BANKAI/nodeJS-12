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

todolistRouter.get("/", (req, res) => {
  try {
    console.log(req.user);
    return res.send("get todo");
  } catch (error) {
    return res.status(404);
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
