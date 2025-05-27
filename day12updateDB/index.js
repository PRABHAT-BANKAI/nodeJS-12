const express = require("express");
const connection = require("./config/db");
const UserModel = require("./models/UserModel");
const upload = require("./middlware/multer");
const port = 8081;
const app = express();
const path = require("path")

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads",express.static(path.join(__dirname,"/uploads")))
app.get("/", async (req, res) => {
  try {
    let userData = await UserModel.find({});
    // console.log(userData)
    res.render("home", { userData });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

app.post("/addData", upload, async (req, res) => {
  try {
if(req.file){
req.body.image = "/uploads"+"/"+req.file.filename

}
    await UserModel.create(req.body);
    console.log("user Data added successfully");
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

app.get("/deleteData/:id", async (req, res) => {
  const id = req.params.id; // _id private//

  try {
    await UserModel.findByIdAndDelete(id);
    console.log("user is deleted successfully");
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});
app.get("/editData/:id", async (req, res) => {
  const id = req.params.id;

  const userData = await UserModel.findById(id);

  res.render("edit", { userData });
});

app.post("/updateData", async (req, res) => {
  // console.log(req.body);

  try {
    await UserModel.findByIdAndUpdate(req.body.id, req.body); //query
    console.log("userData updated successfully");

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

app.listen(port, (error) => {
  if (error) {
    console.log("server is not connected ");
    return;
  }
  connection();
  console.log("server is running ", port);
});
