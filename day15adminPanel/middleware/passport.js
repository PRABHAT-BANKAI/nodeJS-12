const passportLocal = require("passport");
const UserModel = require("../models/userModels");

const PassportStrategy = require("passport-local").Strategy;

passportLocal.use(
  new PassportStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const userData = await UserModel.findOne({ email });

      if (!userData) {
        return done(null, false);
      }

      if (userData.password == password) {
        return done(null, userData);
      } else {
        return done(null, false);
      }
    }
  )
);

passportLocal.serializeUser(async (user, done) => {
  const userData = await UserModel.findById(user.id);
  if (!userData) {
    return done(null, false);
  }

  return done(null, userData.id);
});

passportLocal.deserializeUser(async (id, done) => {
  const userData = await UserModel.findById(id);
  if (!userData) {
    return done(null, false);
  }

  return done(null, userData);
});

passportLocal.checkAuth = (req, res, next) => {
  console.log(req.isAuthenticated(), "checkauth");
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next();
  } else {
    res.redirect("/userdata");
  }
};

module.exports = passportLocal;
