const CustomError = require('../utils/CustomError');
const DietPrefsModel = require('../models/DietPrefsModel');

module.exports = {
  fetchAllDietPrefHandler: async (req, res) => {
    try {
      const dietPref = await DietPrefsModel.find();

      if (!dietPref) {
        throw new CustomError(400, 'Diet pref all data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'fetch all diet pref data success',
        data: {dietPref, count: dietPref.length},
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

  fetchDietPrefByIdHandler: async (req, res) => {
    const {id} = req.params;
    try {
      const dietPref = await DietPrefsModel.findById(id);

      if (!dietPref) {
        throw new CustomError(400, 'Diet pref data fetch failure');
      }

      return res.status(200).json({
        success: true,
        message: 'Diet pref data fetch successful',
        data: {dietPref},
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
          message: 'Incorrect DietPrefId',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  insertDietPrefHandler: async (req, res) => {
    const {name, desc} = req.body;
    try {
      const dietPref = new DietPrefsModel({name, desc});

      if (!dietPref) {
        throw new CustomError(400, 'Diet pref data insert failure');
      }
      await dietPref.save();

      return res.status(201).json({
        success: true,
        message: 'Diet pref data insert successful',
        data: {
          dietPref,
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
          message: 'Diet pref data insert failure',
          validate,
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'The Diet pref already exists',
        });
      }

      // Server error handle
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  },

  editDietPrefByIdHandler: async (req, res) => {
    const {id} = req.params;
    const {name, desc} = req.body;

    try {
      const dietPref = await DietPrefsModel.findByIdAndUpdate(id, {name, desc}, {new: true, runValidators: true});

      if (!dietPref) {
        throw new CustomError(400, 'Diet pref data edit failure');
      }

      return res.status(201).json({
        success: true,
        message: 'Diet pref data edit successful',
        data: {
          dietPref,
        },
      });
    } catch (error) {
      // console.log(error.stack);

      // dietPrefdID Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect DietPrefId',
        });
      }

      // Duplicate error handle
      if (error.name == 'MongoServerError' && error.code == 11000) {
        return res.status(400).json({
          success: false,
          message: 'The Diet pref already exists',
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
          message: 'Diet pref data edit failure',
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

  deleteDietPrefByIdHandler: async (req, res) => {
    const {id} = req.params;

    try {
      const dietPref = await DietPrefsModel.findByIdAndDelete(id);

      if (!dietPref) {
        throw new CustomError(400, 'Diet pref data delete failure');
      }

      res.status(200).json({
        success: true,
        message: 'Diet pref data delete successful',
      });
    } catch (error) {
      // console.log(error.stack);

      // dietPrefdID Error handle
      if (error.name === 'CustomError') {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'Incorrect DietPrefId',
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
