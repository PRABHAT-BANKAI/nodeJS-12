const express = require("express");
const port = 8080;
const app = express();
const path = require("path");
const productRouter = require("./routes/productsRoutes");
const connection = require("./config/db");
const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser") 

app.set("view engine", "ejs");
// app.use("/admin",)
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

//httplocalhost:8080/userdata => login 
//httplocalhost:8080/userdata/signup => signup page 

app.use("/userdata", userRouter);

//httplocalhost:8080/userdata/dashbaord => dashbaord


app.use("/alldata", productRouter);



// .listen use for server run 

app.listen(port, (error) => {
  if (error) {
    console.log("server is not connected ");
    return;
  }
  console.log("server is connected", port);
  connection();
});
