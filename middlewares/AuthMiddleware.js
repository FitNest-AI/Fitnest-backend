const jwt = require('jsonwebtoken');

module.exports = {
  isLogin: (req, res, next) => {
    const token = req.headers['authorization'];

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Please log in to continue.',
        });
      }
      req.user = user;
      next();
    });
  },

  // isLogout: (req, res, next) => {
  //   const token = req.headers['authorization'];

  //   jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
  //     if (err) {
  //       next();
  //     }

  //     return res.status(401).json({
  //       success: false,
  //       message: 'You are already logged in.',
  //     });
  //   });
  // },
};
