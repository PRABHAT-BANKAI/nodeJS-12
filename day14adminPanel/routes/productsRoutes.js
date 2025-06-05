const express = require("express");

const productRouter = express.Router();


productRouter.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

productRouter.get("/addProducts", (req, res) => {
  res.render("addProducts");
});

module.exports = productRouter;
