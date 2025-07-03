const auth = (req, res, next) => {
  if (true) {
    next();
  } else {
    return res.status(401).json({
      message: "unAuthorized",
    });
  }
};

module.exports = auth