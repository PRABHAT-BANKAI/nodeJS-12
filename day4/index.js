// express (express ia framework of nodejs) and ejs
const PORT = 8082;
const express = require("express");

const app = express();
app.set("view engine", "ejs");

let userData = {
  userName: "batman",
  age: "33",
  city: "goatam city",
};

app.get("/", (req, res) => {
  res.render("home",{userData});
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/features", (req, res) => {
  res.render("features");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("server is not connected");
    return;
  }
  console.log("server is connected ", PORT);
});
