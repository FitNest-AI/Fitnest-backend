const CustomError = require('../utils/CustomError');
const TargetMusclesModel = require('../models/TargetMusclesModel');

module.exports = {
  fetchAllTargetMuscleHandler: async (req, res) => {
    try {
      const targetMuscle = await TargetMusclesModel.find();

      if (!targetMuscle) {
        throw new CustomError(400, 'Target muscle all data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Target muscle all data fetch successful',
        data: {targetMuscle, count: targetMuscle.length},
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

  fetchTargetMuscleByIdHandler: async (req, res) => {
    const {id} = req.params;
    try {
      const targetMuscle = await TargetMusclesModel.findById(id);

      if (!targetMuscle) {
        throw new CustomError(400, 'Target muscle data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Target muscle data fetch successful',
        data: {targetMuscle},
      });
    } catch (error) {
      // console.log(error.stack);

      // Id Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect TargetMuscleId',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  insertTargetMuscleHandler: async (req, res) => {
    const {name} = req.body;
    try {
      const targetMuscle = new TargetMusclesModel({name});

      if (!targetMuscle) {
        throw new CustomError(400, 'TargetMuscle data insert failure');
      }
      await targetMuscle.save();

      return res.status(201).json({
        success: true,
        message: 'TargetMuscle data insert successful',
        data: {
          targetMuscle,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // Validation error handle
      if (error.name === 'ValidationError') {
        const validate = Object.keys(error.errors).reduce((acc, key) => {
          acc[key] = error.errors[key].message;
          return acc;
        }, {});

        return res.status(401).json({
          success: false,
          message: 'TargetMuscle data insert failure',
          validate,
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'TargetMuscle is already exists',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editTargetMuscleByIdHandler: async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
      const targetMuscle = await TargetMusclesModel.findByIdAndUpdate(id, {name}, {new: true, runValidators: true});

      if (!targetMuscle) {
        throw new CustomError(400, 'Target muscle data edit failure');
      }

      return res.status(201).json({
        success: true,
        message: 'Target muscle data edit successful',
        data: {
          targetMuscle,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // targetMuscledID Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect TargetMuscleId',
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'TargetMuscle already exists',
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
          message: 'Target muscle data edit failure',
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

  deleteTargetMuscleByIdHandler: async (req, res) => {
    const {id} = req.params;

    try {
      const targetMuscle = await TargetMusclesModel.findByIdAndDelete(id);

      if (!targetMuscle) {
        throw new CustomError(400, 'Target muscle data delete failure');
      }

      res.status(200).json({
        success: true,
        message: 'Target muscle data delete successful',
      });
    } catch (error) {
      // console.log(error.stack);

      // targetMuscledID Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect TargetMuscleId',
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
