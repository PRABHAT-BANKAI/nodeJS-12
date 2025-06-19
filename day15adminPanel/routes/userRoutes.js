const express = require("express");
const UserModel = require("../models/userModels");
let nodemailer = require("nodemailer");
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
      req.flash("success", "login successfully");
      res.redirect("/alldata/dashboard");
    } catch (error) {
      console.log(error);

      res.redirect("/userdata/");
    }
  }
);

userRouter.get("/logout", (req, res) => {
  req.flash("success", "logout successfully");
  req.session.destroy();

  res.redirect("/userdata");
});

userRouter.post("/otpPage", async (req, res) => {
  const { email } = req.body;

  let userData = await UserModel.findOne({ email });

  if (!userData) {
    console.log("user not found");
    
    return res.redirect("/userdata");
  }

  let otp = Math.floor(Math.random() * 10000);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "prabhssgg@gmail.com",
      pass: "jkyn vite uqau jlmv",
    },
  });

  let mailOptions = {
    from: "prabhssgg@gmail.com",
    to: email,
    subject: "OTP for new password update",
    text: `otp :- ${otp}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.redirect("/userdata");
});
module.exports = userRouter;
