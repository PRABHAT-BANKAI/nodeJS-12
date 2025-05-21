const express = require("express");
const connection = require("./config/db");
const port = 8081;
const app = express();

app.get("/", (req, res) => {
  res.send("welcom to database server");
});

app.listen(port, (error) => {
  if (error) {
    console.log("server is not connected ");
    return;
  }
  connection();
  console.log("server is running ", port);
});
