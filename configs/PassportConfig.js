const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// const RolesModel = require('../models/RolesModel');
const UsersModel = require('../models/UsersModel');

// const authenticateGoogleUser = async (request, accessToken, refreshToken, profile, done) => {
//   try {
//     const user = await UsersModel.findOne({email: profile.email}).select(['email', 'password', 'username', 'image']);
//     const role = await RolesModel.findOne({name: 'standard'});
//     const username = profile.email ? profile.email.split('@')[0] : '';

//     if (!user) {
//       const user = new UsersModel({
//         email: profile.email,
//         password: 'google',
//         username,
//         verify: profile.email_verified,
//         role_id: role.id,
//         profile_id: null,
//       });
//       user.save();
//     }
//     return done(null, user, {message: 'Authentication successful. Welcome!'});
//   } catch (error) {
//     return done(null, false, {message: error.message});
//   }
// };

// const googleStrategy = new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: 'http://localhost:3000/api/v1/auth/google/callback',
//   passReqToCallback: true,
// }, authenticateGoogleUser);

// passport.use(googleStrategy);

const authenticateLocalUser = async (email, password, done) => {
  try {
    const user = await UsersModel.findOne({email: email}).select('email password username image verify roleId');

    if (!user) {
      throw new Error('Incorrect email or password. Please try again.');
    };

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error('Incorrect password. Please try again.');
    };

    if (!user.verify) {
      throw new Error('Click the verification link in your email');
    }

    return done(null, user, {message: 'Authentication successful. Welcome!'});
  } catch (error) {
    return done(null, false, {message: error.message});
  }
};

const localStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, authenticateLocalUser);

passport.use(localStrategy);

passport.serializeUser((user, next) => {
  try {
    process.nextTick(() => {
      return next(null, {
        id: user.id,
        username: user.username,
        image: user.image,
      });
    });
  } catch (error) {
    return next(error);
  }
});

passport.deserializeUser((user, next) => {
  const {id} = user;
  process.nextTick( async () => {
    try {
      const user = await UsersModel.findOne({_id: id});

      if (user) {
        return next(null, user);
      }

      throw new Error('Incorrect email or password. Please try again.');
    } catch (error) {
      return next(error);
    }
  });
});
