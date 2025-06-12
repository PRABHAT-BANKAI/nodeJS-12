const express = require("express");
const port = 8080;
const session = require("express-session");
const app = express();
const path = require("path");
const productRouter = require("./routes/productsRoutes");
const connection = require("./config/db");
const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const passport = require("passport");

app.set("view engine", "ejs");
// app.use("/admin",)
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser())

app.use(
  session({
    secret: "rnw",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

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
