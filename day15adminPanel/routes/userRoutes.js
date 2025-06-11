const express = require("express");
const UserModel = require("../models/userModels");
const cookies = require("cookies");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  const allData = req.cookies.auth;
  console.log(allData);
  if (!allData) {
    return res.render("signIn");
  }

  return res.redirect("/alldata/dashboard");
});

userRouter.get("/signup", (req, res) => {
  res.render("signup");
});

userRouter.post("/signup-user", async (req, res) => {
  try {
    await UserModel.create(req.body);
    console.log("added succesfully");
    res.redirect("/userdata/");
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    let userData = await UserModel.findOne({ email });
    if (userData.password == password) {
      res.cookie("auth", userData);
      res.redirect("/alldata/dashboard");
    } else {
      console.log("invalid password");
      res.redirect("/userdata/");
    }
  } catch (error) {
    console.log(error);

    res.redirect("/userdata/");
  }
});

module.exports = userRouter;
