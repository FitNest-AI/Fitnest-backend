const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');
const bcrypt = require('bcrypt');

const CustomError = require('../utils/CustomError');
const sendEmailVerify = require('../utils/SendEmailVerify');

const UsersModel = require('../models/UsersModel');
const RolesModel = require('../models/RolesModel');
const BlacklistTokensModel = require('../models/BlacklistTokensModel');

module.exports = {

  authLoginHandler: async (req, res, next) => {
    const {email, password} = req.body;

    try {
      const user = await UsersModel.findOne({email});

      if (!user) {
        throw new CustomError(400, 'Incorrect email or password. Please try again.');
      };

      if (!bcrypt.compareSync(password, user.password)) {
        throw new CustomError(400, 'Incorrect password. Please try again.');
      };

      if (!user.verify) {
        throw new CustomError(400, 'Click the verification link in your email');
      }

      const token = jwt.sign({id: user._id}, process.env.ACCESS_SECRET_KEY, {
        expiresIn: '365d',
      });

      res.status(200).json({
        success: true,
        message: 'Authentication successful. Welcome!',
        data: {
          user: {
            email: user.email,
            username: user.username,
            image: user.image,
            verify: user.verify,
            roleId: user.roleId,
            token,
          },
        },
      });
    } catch (error) {
      // console.log(error.stack);

      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  authLogoutHandler: async (req, res) => {
    const token = req.headers['authorization'];

    try {
      // Add the token to the blacklist
      const blacklistToken = new BlacklistTokensModel({
        token,
        expiresAt: new Date(),
      });

      blacklistToken.save();

      return res.status(200).json({
        success: true,
        message: 'You have successfully logged out',
      });
    } catch (error) {
      // console.log(error.stack);

      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  authRegisterHandler: async (req, res) => {
    const {email, password, confirmPassword} = req.body;
    const username = 'user' + randomstring.generate();

    try {
      if (password !== confirmPassword) {
        throw new CustomError(422, 'Password confirmation does not match');
      }

      const user = new UsersModel({
        email,
        password,
        username,
      });

      user.roleId = await RolesModel.findOne({name: 'standard'});
      user.token = jwt.sign({id: user._id}, process.env.ACCESS_SECRET_KEY, {
        expiresIn: '300s',
      });
      await user.save();

      // send email verify register
      sendEmailVerify('register', user, 'Email Verification', 'Click here to verify your email');

      return res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: {
          user: {
            email: user.email,
            username: user.username,
            verify: user.verify,
            roleId: user.roleId._id,
            token: user.token,
          },
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // validation cusutom error handle
      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      // Validation error handle
      if (error.name === 'ValidationError') {
        const validate = Object.keys(error.errors).reduce((acc, key) => {
          acc[key] = error.errors[key].message;
          return acc;
        }, {});

        return res.status(422).json({
          success: false,
          message: 'Registration failure',
          validate,
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(409).json({
          success: false,
          message: 'Email address is already registered',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  authResendVerifyHandle: async (req, res) => {
    const {email} = req.body;

    try {
      if (!email) {
        throw new CustomError(422, 'Email address is required');
      }

      const user = await UsersModel.findOne({email: email});

      if (!user) {
        throw new CustomError(400, 'Email not registered. Please try again');
      }

      user.token = jwt.sign({id: user._id}, process.env.ACCESS_SECRET_KEY, {
        expiresIn: '300s',
      });
      await user.save();

      // re-send email verify register
      sendEmailVerify('register', user, 'Email Verification', 'Click here to verify your email');

      return res.status(200).json({
        success: true,
        message: 'Token successfully sent',
        data: {
          token: user.token,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // validation cusutom error handle
      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  authVerifyHandle: async (req, res) => {
    const {token} = req.query;

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
      const user = await UsersModel.findById(decoded.id);

      if (user.token !== token) {
        throw new CustomError(400, 'Invalid token');
      }

      // user update
      user.token = undefined;
      user.verify = true;
      await user.save();

      return res.status(201).json({
        success: true,
        message: 'Verification successful',
        data: {
          user: {
            email: user.email,
            verify: user.verify,
          },
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // token error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      if (error.name === 'JsonWebTokenError') {
        return res.status(400).json({
          success: false,
          message: 'Invalid token. Please try again',
        });
      }

      if (error.name === 'TokenExpiredError') {
        return res.status(400).json({
          success: false,
          message: 'Expired token. Please try again',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  authForgetPasswordHandler: async (req, res) => {
    const {email} = req.body;
    try {
      if (!email) {
        throw new CustomError(422, 'Email address is required');
      }

      const user = await UsersModel.findOne({email});

      if (!user) {
        throw new CustomError(400, 'Email not registered. Please try again');
      }

      user.token = jwt.sign({id: user._id}, process.env.ACCESS_SECRET_KEY, {
        expiresIn: '60s',
      }); ;
      await user.save();

      // send email token forget password
      sendEmailVerify('resetPassword', user, 'Reset Password', 'Click here to reset your password');

      return res.status(200).json({
        success: true,
        message: 'Token successfully sent',
        data: {
          token: user.token,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  authResetPasswordhandler: async (req, res) => {
    const {token} = req.query;
    const password = randomstring.generate();

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
      const user = await UsersModel.findById(decoded.id);

      if (user.token !== token) {
        throw new CustomError(400, 'Invalid token');
      }

      // send newPassword
      sendEmailVerify('newPassword', user, 'Your New Password', password);

      user.password = password;
      user.token = undefined;
      await user.save();

      return res.status(201).json({
        success: true,
        message: 'Reset Password Successful',
      });
    } catch (error) {
      // console.log(error.stack);

      // Validation error handle
      if (error.name === 'ValidationError') {
        const validate = Object.keys(error.errors).reduce((acc, key) => {
          acc[key] = error.errors[key].message;
          return acc;
        }, {});

        return res.status(422).json({
          success: false,
          message: 'Reset Password failure',
          validate,
        });
      }

      // custom error handle
      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      if (error.name === 'JsonWebTokenError') {
        return res.status(400).json({
          success: false,
          message: 'Invalid token. Please try again',
        });
      }

      if (error.name === 'TokenExpiredError') {
        return res.status(400).json({
          success: false,
          message: 'Expired token. Please try again',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },
};
