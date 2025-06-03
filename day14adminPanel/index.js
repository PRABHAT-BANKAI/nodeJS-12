const express = require("express");
const port = 8080;
const app = express();
const path = require("path");

app.set("view engine", "ejs");
// app.use("/admin",)
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("dashboard");
});

app.listen(port, (error) => {
  if (error) {
    console.log("server is not connected ");
    return;
  }
  console.log("server is connected");
});
