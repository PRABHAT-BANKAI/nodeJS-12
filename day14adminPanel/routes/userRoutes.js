const express = require("express");
const UserModel = require("../models/userModels");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.render("signIn");
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
  console.log(req.body)

  try {
    let userData = await UserModel.findOne({ email });
    if (userData.password == password) {
      res.redirect("/alldata/dashboard");
    } else {
      console.log("invalid password")
      res.redirect("/userdata/");
    }
  } catch (error) {
    console.log(error);

    res.redirect("/userdata/");
  }
});

module.exports = userRouter;
