const express = require("express");
const connection = require("./config/db");
const UserRouter = require("./routes/userRoute");
const app = express();
require("dotenv").config();

app.use(express.json());
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "server is running",
//   });
// });

app.use("/api/user", UserRouter);
// i can port number from .env file
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("server is not connected");
    return;
  }
  connection();
  console.log("server is connected", process.env.PORT);
});
