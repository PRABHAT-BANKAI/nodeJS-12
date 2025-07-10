const express = require("express");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const UserRouter = express.Router();
const jwt = require("jsonwebtoken");
UserRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "user router",
  });
});

UserRouter.post("/", async (req, res) => {
  try {
    let { userName, email, password } = req.body;

    password = await bcrypt.hash(password, 10);

    await UserModel.create({ userName, email, password });

    return res.status(201).json({
      message: "user added successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: { ...error },
    });
  }
});

UserRouter.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });
      res.status(200).json({
        message: "Login successfully",
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});
module.exports = UserRouter;
