const express = require("express");
const UserModel = require("../models/userModels");
const cookies = require("cookies");
const passportLocal = require("../middleware/passport");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  return res.render("signIn");
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

userRouter.post(
  "/login",
  passportLocal.authenticate("local", { failureRedirect: "/userdata" }),
  async (req, res) => {
    try {
      res.redirect("/alldata/dashboard");
    } catch (error) {
      console.log(error);

      res.redirect("/userdata/");
    }
  }
);

module.exports = userRouter;
