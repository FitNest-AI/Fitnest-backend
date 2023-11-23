const CustomError = require('../utils/CustomError');
const ExercisesModel = require('../models/ExercisesModel');

module.exports = {
  fetchAllExerciseHandler: async (req, res) => {
    try {
      const exercise = await ExercisesModel.find().select('_id name image levelId').populate({path: 'levelId', select: '_id name'});

      if (!exercise) {
        throw new CustomError(400, 'Exercise all data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Exercise all data fetch successful',
        data: {
          exercise,
          count: exercise.length,
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

  fetchExerciseDetailByIdHandler: async (req, res) => {
    const {id} = req.params;
    try {
      const exercise = await ExercisesModel.findById(id)
          .populate({path: 'sideId', select: '_id name instruction'})
          .populate({path: 'levelId', select: '_id name instruction'})
          .populate({path: 'targetMuscleId', select: '_id name instruction'});

      if (!exercise) {
        throw new CustomError(400, 'Exercise data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Exercise data fetch successful',
        data: {
          exercise,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // Id Error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect ExerciseId',
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

  insertExerciseHandler: async (req, res, next) => {
    const {name, desc, levelId, targetMuscleId, sideId, orientation, instruction} = req.body;

    try {
      let image = null;

      if (req.fileTypeError) {
        throw new CustomError(400, req.fileTypeError.message);
      }

      if (req.file) {
        if (req.file.filename || req.file.linkUrl) {
          image = req.file.linkUrl;
        }
      }

      const exercise = new ExercisesModel({
        name, desc, image, levelId, targetMuscleId, sideId, orientation, instruction,
      });

      if (!exercise) {
        throw new CustomError(400, 'Exercise data insert failure');
      }

      await exercise.save();

      return res.status(201).json({
        success: true,
        message: 'Exercise data insert successful',
        data: {
          exercise,
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
          message: 'Exercise data insert failure',
          validate,
        });
      }

      if (error.name === 'CustomError') {
        return res.status(error.code).json({
          success: false,
          message: error.message,
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'Exercise is already exist',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editExerciseByIdHandler: async (req, res) => {
    const {id} = req.params;
    const {name, desc, levelId, targetMuscleId, sideId, orientation, instruction} = req.body;

    try {
      let image = null;

      const exercise = await ExercisesModel.findById(id).select('image');

      if (!exercise) {
        throw new CustomError(400, 'Exercise data edit failure');
      }

      if (req.file) {
        if (req.file.filename && req.file.linkUrl) {
          image = req.file.linkUrl;
        }
      } else {
        image = exercise.image;
      }

      const updateExercise = await ExercisesModel.findByIdAndUpdate(id, {
        name, desc, image, levelId, targetMuscleId, sideId, orientation, instruction,
      }, {new: true, runValidators: true});

      return res.status(201).json({
        success: true,
        message: 'Exercise Data edit successful',
        data: {
          exercise: updateExercise,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // Id Error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect ExerciseId',
        });
      }

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
          message: 'Exercise Data edit failure',
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

  deleteExerciseByIdHandler: async (req, res) => {
    const {id} = req.params;

    try {
      const exercise = await ExercisesModel.findByIdAndDelete(id);

      if (!exercise) {
        throw new CustomError(400, 'Exercise data delete failure');
      }

      res.status(200).json({
        success: true,
        message: 'Exercise Data delete successful',
      });
    } catch (error) {
      // console.log(error.stack);

      // Id Error handle
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect ExerciseId',
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

  searchExerciseHandler: async (req, res) => {
    try {
      const query = {};

      if (req.query.q) {
        query.name = {$regex: `.*${req.query.q}.*`};
      }

      if (req.query.tm) {
        query.targetMuscleId = {$in: req.query.tm};
      }

      const exercise = await ExercisesModel.find(query).select('_id name image levelId').populate({path: 'levelId', select: '_id name'});

      if (!exercise) {
        throw new CustomError(400, 'Exercise not found');
      }

      res.status(200).json({
        success: false,
        message: 'Exercise data successfully found',
        exercise,
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

};
