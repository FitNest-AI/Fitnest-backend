const CustomError = require('../utils/CustomError');
const GoalsModel = require('../models/GoalsModel');

module.exports = {
  fetchAllGoalHandler: async (req, res) => {
    try {
      const goal = await GoalsModel.find();

      if (!goal) {
        throw new CustomError(400, 'Goal all data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'fetch all goal data successful',
        data: {goal, count: goal.length},
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

  fetchGoalByIdHandler: async (req, res) => {
    const {id} = req.params;
    try {
      const goal = await GoalsModel.findById(id);

      if (!goal) {
        throw new CustomError(400, 'Goal data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'fetch goal data successful',
        data: {goal},
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
          message: 'Incorrect GoalId',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  insertGoalHandler: async (req, res) => {
    const {name} = req.body;
    try {
      const goal = new GoalsModel({name});

      if (!goal) {
        throw new CustomError(400, 'Goal data insert failure');
      }
      await goal.save();

      return res.status(201).json({
        success: true,
        message: 'Goal data insert successful',
        data: {
          goal,
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
          message: 'Goal data insert failure',
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
          message: 'The Goal already exists',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editGoalByIdHandler: async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
      const goal = await GoalsModel.findByIdAndUpdate(id, {name}, {new: true, runValidators: true});

      if (!goal) {
        throw new CustomError(400, 'Goal data edit failure');
      }

      return res.status(201).json({
        success: true,
        message: 'Goal data edit successful',
        data: {
          goal,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // goaldID Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect GoalId',
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'The Goal already exists',
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
          message: 'Goal data edit failure',
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

  deleteGoalByIdHandler: async (req, res) => {
    const {id} = req.params;

    try {
      const goal = await GoalsModel.findByIdAndDelete(id);

      if (!goal) {
        throw new CustomError(400, 'Goal data delete failure');
      }

      res.status(200).json({
        success: true,
        message: 'Goal data delete successful',
      });
    } catch (error) {
      // console.log(error.stack);

      // goaldID Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect GoalId',
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
