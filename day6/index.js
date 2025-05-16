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

app.get("/delete/:id", (req, res) => {
  console.log(req.params);

  record = record.filter((item, index) => index != req.params.id);
  console.log("data is deleted")
  return res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  const getData = record[req.params.id];

  res.render("Edit", { getData, id });
});

app.post("/updaterecord", (req, res) => {
  const { id, userName, age } = req.body;

  record[id] = { userName, age };
  console.log("updated successfully");
  res.redirect("/");
});

app.listen(port, (error) => {
  if (error) {
    console.log("server is not connected");
    return;
  }
  console.log("server is connected", port);
});

// array = [12,4,5,78,93,98]
//console.log(array[4])//98
