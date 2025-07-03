const express = require("express");
const connection = require("./config/db");
const userRouter = require("./routes/UserRoute");
const auth = require("./middleware/auth");
const port = 8080;

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use(auth);

app.get("/api/products", (req, res) => {
  res.json({ message: "product data" });
});

app.listen(port, (err) => {
  if (err) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log("server is running on port", port);
});
