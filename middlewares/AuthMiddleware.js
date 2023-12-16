const jwt = require('jsonwebtoken');
const BlacklistTokensModel = require('../models/BlacklistTokensModel');

module.exports = {
  isLogin: async (req, res, next) => {
    const token = req.headers['authorization'];

    const isTokenBlacklisted = await BlacklistTokensModel.findOne({token});

    if (isTokenBlacklisted) {
      return res.status(401).json({
        success: false,
        message: 'Please log in to continue.',
      });
    };

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
};
