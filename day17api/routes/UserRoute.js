const express = require("express");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  let { email, password } = req.body;
  password = await bcrypt.hash(password, 10);

  console.log(password);
  try {
    await UserModel.create({ email, password });
    return res.status(201).json({
      message: "added user successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});
userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let getUserData = await UserModel.findOne({ email });

    if (!getUserData) {
      return res.status(400).json({
        message: "user Not Found",
      });
    }
    if (await bcrypt.compare(password, getUserData.password)) {
      //jwt (json web token )

      let token = jwt.sign({ getUserData }, "sec-daivik", {
        expiresIn: "2h", // token expiring timing
      });
      console.log(token);
      res.status(200).json({
        message: "Login successfully",
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
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
