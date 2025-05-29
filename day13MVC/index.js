const express = require("express");
const connection = require("./config/db");
const userRouter = require("./routes/userRoute");
const port = 8080;
const app = express();

app.use("/users", userRouter);

app.listen(port, (error) => {
  if (error) {
    console.log("server is not connected");
    return;
  }
  connection();
  console.log("server is running ", port);
});
