const express = require("express");
const UserModel = require("../models/userModel");

const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "user router",
  });
});

UserRouter.post("/", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    await UserModel.create({ userName, email, password });

   return res.status(201).json({
      message: "user added successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});
module.exports = UserRouter;
