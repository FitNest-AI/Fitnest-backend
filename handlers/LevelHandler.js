const CustomError = require('../utils/CustomError');
const LevelsModel = require('../models/LevelsModel');

module.exports = {
  fetchAllLevelHandler: async (req, res) => {
    try {
      const level = await LevelsModel.find();

      if (!level) {
        throw new CustomError(400, 'Level all data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Level all data fetch successful',
        data: {level, count: level.length},
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

  fetchLevelByIdHandler: async (req, res) => {
    const {id} = req.params;
    try {
      const level = await LevelsModel.findById(id);

      if (!level) {
        throw new CustomError(400, 'Level data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Level data fetch successful',
        data: {level},
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
          message: 'Incorrect LevelId',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  insertLevelHandler: async (req, res) => {
    const {name} = req.body;
    try {
      const level = new LevelsModel({name});

      if (!level) {
        throw new CustomError(400, 'Level data insert failure');
      }
      await level.save();

      return res.status(201).json({
        success: true,
        message: 'Level data insert successful',
        data: {
          level,
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
          message: 'Level data insert failure',
          validate,
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'The Level already exists',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editLevelByIdHandler: async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
      const level = await LevelsModel.findByIdAndUpdate(id, {name}, {new: true, runValidators: true});

      if (!level) {
        throw new CustomError(400, 'Level data edit failure');
      }

      return res.status(201).json({
        success: true,
        message: 'Level data edit successful',
        data: {
          level,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // leveldID Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect LevelId',
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'The Level already exists',
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
          message: 'Level data edit failure',
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

  deleteLevelByIdHandler: async (req, res) => {
    const {id} = req.params;

    try {
      const level = await LevelsModel.findByIdAndDelete(id);

      if (!level) {
        throw new CustomError(400, 'Level data delete failure');
      }

      res.status(200).json({
        success: true,
        message: 'Level data delete successful',
      });
    } catch (error) {
      // console.log(error.stack);

      // leveldID Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect LevelId',
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
