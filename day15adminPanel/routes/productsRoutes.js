const express = require("express");
const passportLocal = require("../middleware/passport");

const productRouter = express.Router();

productRouter.get("/dashboard", passportLocal.checkAuth, (req, res) => {
  return res.render("dashboard");
});

productRouter.get("/addProducts", (req, res) => {
  res.render("addProducts");
});

productRouter.get("/viewProducts", (req, res) => {
  res.render("viewProducts");
});

module.exports = productRouter;
