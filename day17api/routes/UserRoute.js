const express = require("express");
const UserModel = require("../models/userModel");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  try {
    await UserModel.create(req.body);
    return res.status(201).json({
      message: "added user successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    let getData = await UserModel.find({});
    console.log(getData);
    return res.status(200).json({
      message: "success",
      data: getData,
    });
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await UserModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "delete successfully",
    });
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
});

userRouter.put("/:id", async (req, res) => {
  let { email, password } = req.body;
  try {
    let id = req.params.id;
    await UserModel.findByIdAndUpdate(id, { email, password });
    return res.status(200).json({
      message: "Update successfully",
    });
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
});

module.exports = userRouter;
