const jwt = require("jsonwebtoken");
const authenticate = async (req, res, next) => {
  console.log("auth");
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    let decoded = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // console.log(decoded);
    req.user = decoded.user
    next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

module.exports = authenticate;
