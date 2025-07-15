const express = require("express");
const connection = require("./config/db");
const UserRouter = require("./routes/userRoute");
const todolistRouter = require("./routes/todoRoute");
const authenticate = require("./middleware/auth");
const app = express();
const cors = require("cors")
require("dotenv").config();
app.use(cors())
app.use(express.json());
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "server is running",
//   });
// });

app.use("/api/user", UserRouter);

app.use(authenticate);// middleware
app.use("/api/todo", todolistRouter);
// i can port number from .env file
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("server is not connected");
    return;
  }
  connection();
  console.log("server is connected", process.env.PORT);
});
