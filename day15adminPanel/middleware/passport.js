const passport = require("passport");
const UserModel = require("../models/userModels");

const PassportStrategy = require("passport-local").Strategy;

passport.use(
  new PassportStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const userData = await UserModel.findOne({ email });

      if (!userData) {
        return done(null, false);
      }

      if (userData.password == password) {
        return done(null, userData);
      }
    }
  )
);

passport.serializeUser(async (user, done) => {
  const userData = await UserModel.findById(user.id);
  if (!userData) {
    return done(null, false);
  }

  return done(null, userData.id);
});

passport.deserializeUser(async (id, done) => {
  const userData = await UserModel.findById(id);
  if (!userData) {
    return done(null, false);
  }

  return done(null, userData);
});

module.exports = passport;
