const express = require("express");
const port = 8080;
const app = express();
const path = require("path");
const productRouter = require("./routes/productsRoutes");
const connection = require("./config/db");
const userRouter = require("./routes/userRoutes");

app.set("view engine", "ejs");
// app.use("/admin",)
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded({ extended: true }));

app.use("/userdata", userRouter);
app.use("/alldata", productRouter);

app.listen(port, (error) => {
  if (error) {
    console.log("server is not connected ");
    return;
  }
  console.log("server is connected", port);
  connection();
});
