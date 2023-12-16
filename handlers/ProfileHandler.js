const ProfilesModel = require('../models/ProfilesModel');
const CustomError = require('../utils/CustomError');

module.exports = {
  fetchAllProfileHandler: async (req, res) => {
    try {
      const profile = await ProfilesModel.find().select('firstname lastname gender dateOfBirth height weight bmi')
          .populate({path: 'goalId', select: '_id name'})
          .populate({path: 'levelId', select: '_id name'})
          .populate({path: 'targetMuscleId', select: '_id name'})
          .populate({path: 'conditionId', select: '_id name'})
          .populate({path: 'dietPrefId', select: '_id name'});

      if (!profile) {
        throw new CustomError(400, 'Profile all data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Profile all data fetch successful',
        data: {
          profile,
          count: profile.length,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      if (error.name === 'CustomError') {
        return res.status(400).json({
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

  fetchProfileHandler: async (req, res) => {
    const {id} = req.user;

    try {
      const profile = await ProfilesModel.findOne({userId: id}).select('firstname lastname gender dateOfBirth height weight bmi')
          .populate({path: 'goalId', select: '_id name'})
          .populate({path: 'levelId', select: '_id name'})
          .populate({path: 'targetMuscleId', select: '_id name'})
          .populate({path: 'conditionId', select: '_id name'})
          .populate({path: 'dietPrefId', select: '_id name'});

      if (!profile) {
        throw new CustomError(400, 'Profile data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Profile data fetch successful',
        data: {
          profile,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // Id Error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect profileId',
        });
      }

      if (error.name === 'CustomError') {
        return res.status(400).json({
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

  insertProfileHandler: async (req, res) => {
    const {id} = req.user;
    const {firstname, lastname, gender, dateOfBirth, height, weight, goalId, levelId, targetMuscleId, conditionId, dietPrefId} = req.body;
    try {
      const heightMeter = height / 100;
      const bmi = !height || !weight ? 0 : parseFloat(weight / (heightMeter * heightMeter)).toFixed(2);

      const profile = new ProfilesModel({
        firstname,
        lastname,
        gender,
        dateOfBirth,
        height,
        weight,
        bmi,
        goalId,
        levelId,
        targetMuscleId,
        conditionId,
        dietPrefId,
        userId: id,
      });

      if (!profile) {
        throw new CustomError(400, 'Profile data insert failure');
      }
      await profile.save();

      return res.status(201).json({
        success: true,
        message: 'Profile Data insert successful',
        data: {
          profile,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      if (error.name === 'CustomError') {
        return res.status(400).json({
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

        return res.status(401).json({
          success: false,
          message: 'Profile Data insert failure',
          validate,
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'Profile is already exist',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editProfileHandler: async (req, res) => {
    const {id} = req.user;
    const {firstname, lastname, gender, dateOfBirth, height, weight, goalId, levelId, targetMuscleId, conditionId, dietPrefId} = req.body;

    try {
      const heightMeter = height / 100;
      const bmi = !height || !weight ? 0 : parseFloat(weight / (heightMeter * heightMeter)).toFixed(2);

      const profile = await ProfilesModel.findOneAndUpdate({userId: id}, {
        firstname,
        lastname,
        gender,
        dateOfBirth,
        height,
        weight,
        bmi,
        goalId,
        levelId,
        targetMuscleId,
        conditionId,
        dietPrefId,
      }, {new: true, runValidators: true});

      if (!profile) {
        throw new CustomError(400, 'Profile data edit failure');
      }

      return res.status(201).json({
        success: true,
        message: 'Profile Data edit successful',
        data: {
          profile,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      // Id Error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'profileId not found',
        });
      }

      // Validation error handle
      if (error.name === 'ValidationError') {
        const validate = Object.keys(error.errors).reduce((acc, key) => {
          acc[key] = error.errors[key].message;
          return acc;
        }, {});

        return res.status(401).json({
          success: false,
          message: 'Profile Data edit failure',
          validate,
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'Profile is already exist',
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
