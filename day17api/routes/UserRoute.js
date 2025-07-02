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

module.exports = userRouter;
