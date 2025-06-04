const express = require("express");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.render("signIn");
});

productRouter.get("/signup", (req, res) => {
  res.render("signup");
});
productRouter.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

productRouter.get("/addProducts", (req, res) => {
  res.render("addProducts");
});

module.exports = productRouter;
