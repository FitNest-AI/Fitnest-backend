const CustomError = require('../utils/CustomError');
const UsersModel = require('../models/UsersModel');
const bcrypt = require('bcrypt');
const RolesModel = require('../models/RolesModel');

module.exports = {
  fetchAllUserHandler: async (req, res) => {
    try {
      const user = await UsersModel.find().select('email username image verify roleId profileId');

      if (!user) {
        throw new CustomError(400, 'User all data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'User all data fetch successful',
        data: {
          user: user,
          count: user.length,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // fetch error handle
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

  fetchUserHandler: async (req, res) => {
    try {
      const user = await UsersModel.findById(req.user.id).select('email username image verify roleId profileId');

      if (!user) {
        throw new CustomError(400, 'User data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'User data fetch successful',
        data: {
          user,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // id error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect userID',
        });
      }

      // fetch error handle
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

  editUserHandler: async (req, res) => {
    let {username, password, confirmPassword} = req.body;

    try {
      const user = await UsersModel.findById(req.user.id);

      if (!user) {
        throw new CustomError(400, 'User data edit failure');
      }

      if (password) {
        if (password !== confirmPassword) {
          throw new CustomError(422, 'Password confirmation does not match');
        }
        if (password.length < 6) {
          throw new CustomError(422, 'Password must be at least 6 characters');
        }
        password = bcrypt.hashSync(password, 10);
      }

      if (!password) {
        password = user.password;
      }

      if (!username) {
        username = user.username;
      }

      const userUpdate = await UsersModel.findByIdAndUpdate(req.user.id, {
        username,
        password,
      }, {new: true, runValidators: true}).select('email username image verify roleId profileId');

      return res.status(201).json({
        success: true,
        message: 'User data edit successful',
        data: {
          user: userUpdate,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // id error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect userID',
        });
      }

      // edit error handle
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
          message: 'User data edit failure',
          validate,
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editUserImageHandler: async (req, res) => {
    try {
      let image = null;

      if (req.fileTypeError) {
        throw new CustomError(422, req.fileTypeError.message);
      }

      if (req.file) {
        if (req.file.filename || req.file.linkUrl) {
          image = req.file.linkUrl;
        }
      }

      const user = await UsersModel.findByIdAndUpdate(req.user.id, {
        image,
      }, {new: true, runValidators: true}).select('email username image verify roleId profileId');

      if (!user) {
        throw new CustomError(422, 'User image edit failure');
      }

      return res.status(201).json({
        success: true,
        message: 'User image edit successful',
        data: {user},
      });
    } catch (error) {
      // console.log(error.stack);

      // id error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect userID',
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
          message: 'User image edit failure',
          validate,
        });
      }

      // edit error handle
      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      // file is required handle
      if (error.name === 'TypeError') {
        return res.status(422).json({
          success: false,
          message: 'Invalid file type',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editUserRoleHandler: async (req, res) => {
    try {
      const roleId = await RolesModel.findOne({name: 'premium'}).select('_id');
      const user = await UsersModel.findByIdAndUpdate(req.user.id, {roleId}, {new: true, runValidators: true}).select('email username image verify roleId profileId');


      if (!user) {
        throw new CustomError(400, 'User role edit failure');
      }

      return res.status(201).json({
        success: true,
        message: 'User role edit successful',
        data: {user},
      });
    } catch (error) {
      console.log(error.stack);

      // id error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect roleId',
        });
      }

      // edit error handle
      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      // file is required handle
      if (error.name === 'TypeError') {
        return res.status(400).json({
          success: false,
          message: 'Image is required',
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
