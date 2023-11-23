const CustomError = require('../utils/CustomError');
const WorkoutsModel = require('../models/WorkoutsModel');

module.exports = {
  fetchAllWorkoutHandler: async (req, res) => {
    const userId = req.user._id;
    try {
      const workout = await WorkoutsModel.find().where({userId: userId});

      if (!workout) {
        throw new CustomError(400, 'Workout all data fetch failure');
      }

      const newWorkout = workout.map((data) => {
        return {
          _id: data._id,
          name: data.name,
          desc: data.desc,
          rest: data.rest,
          day: data.day,
          time: data.time,
          moveset: data.moveset.length,
        };
      });

      return res.status(200).json({
        success: true,
        message: 'Workout all data fetch successful',
        data: {
          workout: newWorkout,
          count: workout.length,
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

  fetchWorkoutByIdHandler: async (req, res) => {
    const {id} = req.params;
    const userId = req.user._id;
    try {
      const workout = await WorkoutsModel.findOne({_id: id, userId}).select('name desc rest day time moveset')
          .populate({path: 'moveset.exerciseId', select: '_id name desc levelId', populate: {path: 'levelId', select: '_id name'}});

      if (!workout) {
        throw new CustomError(400, 'Workout data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Workout data fetch successful',
        data: {workout},
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
          message: 'Incorrect workoutId',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  insertWorkoutHandler: async (req, res) => {
    const {name, desc, rest, day, time, moveset} = req.body;
    const userId = req.user._id;
    try {
      const workout = new WorkoutsModel({
        name, desc, rest, day, time, moveset, userId,
      });

      if (!workout) {
        throw new CustomError(400, 'Workout data insert failure');
      }
      workout.save();

      return res.status(201).json({
        success: true,
        message: 'Workout data insert successful',
        data: {workout},
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
          message: 'Workout data insert failure',
          validate,
        });
      }

      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'Workout is already exists',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editWorkoutByIdHandler: async (req, res) => {
    const {id} = req.params;
    const {name, desc, rest, day, time} = req.body;

    const userId = req.user._id;
    try {
      const workout = await WorkoutsModel.findOneAndUpdate({_id: id, userId: userId}, {
        name, desc, rest, day, time, moveset, userId,
      }, {new: true, runValidators: true});

      if (!workout) {
        throw new CustomError(400, 'Workout data edit failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Workout data edit successful',
        data: {workout},
      });
    } catch (error) {
      // console.log(error.stack);

      // workoutId Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect WorkoutId',
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'Workout is already exists',
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
          message: 'Workout data edit failure',
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

  deleteWorkoutByIdHandler: async (req, res) => {
    const {id} = req.params;
    const userId = req.user._id;

    try {
      const workout = await WorkoutsModel.findOneAndDelete({_id: id, userId: userId});

      if (!workout) {
        throw new CustomError(400, 'Workout data delete failure');
      }

      res.status(200).json({
        success: true,
        message: 'Workout data delete successful',
      });
    } catch (error) {
      // console.log(error.stack);

      // workoutId Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect WorkoutId',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  insertMovesetOnWorkoutByIdHandler: async (req, res) => {
    const {id} = req.params;
    const userId = req.user._id;
    const {set, rep, exerciseId} = req.body;

    try {
      const workout = await WorkoutsModel.findOneAndUpdate(
          {_id: id, userId: userId},
          {$push: {moveset: {set: set, rep: rep, exerciseId: exerciseId}}},
          {new: true, runValidators: true},
      );

      res.status(201).json({
        success: true,
        message: 'Moveset data insert successful',
        workout,
      });
    } catch (error) {
      // Handle validation error
      if (error.name === 'ValidationError') {
        const validate = Object.keys(error.errors).reduce((acc, key) => {
          acc[key] = error.errors[key].message;
          return acc;
        }, {});

        return res.status(401).json({
          success: false,
          message: 'Moveset data insert failure',
          validate,
        });
      }

      // Handle duplicate error
      if (error.name === 'MongoServerError' && error.code === 11000) {
        return res.status(400).json({
          success: false,
          message: 'Moveset is already exists',
        });
      }

      // Handle other errors
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  deleteMovesetOnWorkoutByIdHandler: async (req, res) => {
    const {id, movesetId} = req.params;
    const userId = req.user._id;

    try {
      const workout = await WorkoutsModel.findOneAndUpdate({_id: id, userId}, {'$pull': {'moveset': {'_id': movesetId}}}, {new: true, runValidators: true});

      if (!workout) {
        throw new CustomError(400, 'Workout data delete failure');
      }

      res.status(201).json({
        success: true,
        message: 'moveset data delete successful',
        workout,
      });
    } catch (error) {

    }
  },
};
