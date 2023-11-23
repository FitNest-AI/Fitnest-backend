module.exports = {
  isLogin: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.status(401).json({
      success: false,
      message: 'Please log in to continue.',
    });
  },

  isLogout: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    return res.status(401).json({
      success: false,
      message: 'You are already logged in.',
    });
  },
};
