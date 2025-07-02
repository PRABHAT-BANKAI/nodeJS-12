const express = require("express");
const connection = require("./config/db");
const userRouter = require("./routes/UserRoute");
const port = 8080;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello from server",
  });
});

app.use("/api/user", userRouter);

app.listen(port, (err) => {
  if (err) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log("server is running on port", port);
});
