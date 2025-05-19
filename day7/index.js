const express = require("express");
const auth = require("./middleware/authentication");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); // middleware to parse URL-encoded data

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/senddata", auth, (req, res) => {
  // console.log(req.body);
  res.redirect("/");
});
// app.use(auth);// middleware function
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/features", auth, (req, res) => {
  res.render("features");
});

app.listen(port, (error) => {
  if (error) {
    console.error("server is not connected");
  } else {
    console.log(`Server is connnected on port ${port}`);
  }
});
