const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); // to get data from the form
let record = [];

app.get("/", (req, res) => {
  res.render("home", { record });
});

app.post("/addrecord", (req, res) => {
  console.log(req.body);
  const { userName, age } = req.body; // destructuring
  if (userName === "" || age === "") {
    console.log("Please fill all the fields");
    return res.redirect("/");
  }
  record.push(req.body);
  console.log("you data is added");
  res.redirect("/");
});

app.listen(port, (error) => {
  if (error) {
    console.log("server is not connected");
    return;
  }
  console.log("server is connected", port);
});
