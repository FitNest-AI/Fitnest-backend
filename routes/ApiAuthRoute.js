const {Router} = require('express');
const {isLogin, isLogout} = require('../middlewares/AuthMiddleware');
const {
  authLoginHandler,
  authLogoutHandler,
  authRegisterHandler,
  authVerifyHandle,
  authResendVerifyHandle,
  authForgetPasswordHandler,
  authResetPasswordhandler,
} = require('../handlers/AuthHandler');

// eslint-disable-next-line new-cap
const route = Router();

// route.get('/', (req, res) => {
//   res.send('Auth Documentation');
// });

// authetication route
route.post('/register', isLogout, authRegisterHandler);
route.get('/verify', isLogout, authVerifyHandle);
route.get('/resend-verify', isLogout, authResendVerifyHandle);

route.get('/forget-password', isLogout, authForgetPasswordHandler);
route.get('/reset-password', isLogout, authResetPasswordhandler);

route.post('/login', isLogout, authLoginHandler);
route.get('/logout', isLogin, authLogoutHandler);

// route.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}));

// route.get( '/google/callback', passport.authenticate( 'google', {
//   successRedirect: (req, res) => res.json('login'),
//   failureRedirect: (req, res) => res.json('fail'),
// }));

module.exports = route;
