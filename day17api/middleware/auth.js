const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    // console.log(req.body);
    // console.log(token.split(" ")[1]);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    let decoded = jwt.verify(token.split(" ")[1], "sec-daivik");

    if (!decoded) {
      return res.status(403).json({ message: "Invalid token" });
    }

    if (decoded.getUserData.email !== req.body.email) {
      return res.status(400).json({ message: "Invalid email" });
    }
    // console.log(decoded);
    let reqPassword = req.body.password;
    let userPassword = decoded.getUserData.password;
    console.log(reqPassword, userPassword);

    const checkPassword = await bcrypt.compare(reqPassword, userPassword);
    console.log(checkPassword);
    if (!checkPassword) {
      return res.status(403).json({ message: "Invalid password" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = auth;
