const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema;

require('./LevelsModel');
require('./GoalsModel');
require('./TargetMusclesModel');
require('./DietPrefsModel');
require('./UsersModel');

const ProfilesSchema = new Schema({
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: ['man', 'woman'],
    required: false,
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
  height: {
    type: Number,
    required: false,
    min: [50, 'Too low. Please enter a value >= 50.'],
    max: [280, 'Too high. Please enter a value <= 280.'],
  },
  weight: {
    type: Number,
    required: false,
    min: [10, 'Too low. Please enter a value >= 10.'],
    max: [600, 'Too high. Please enter a value <= 600.'],
  },
  bmi: {
    type: Number,
    required: false,
  },
  goalId: [{
    type: ObjectId,
    required: false,
    ref: 'Goals',
  }],
  levelId: {
    type: ObjectId,
    required: false,
    ref: 'Levels',
  },
  targetMuscleId: [{
    type: ObjectId,
    required: false,
    ref: 'Target_Muscles',
  }],
  conditionId: {
    type: ObjectId,
    required: false,
    ref: 'Conditions',
  },
  dietPrefId: {
    type: ObjectId,
    required: false,
    ref: 'Diet_Prefs',
  },
  userId: {
    type: ObjectId,
    unique: [true, 'userId is already registered'],
    required: true,
    ref: 'users',
  },
}, {timestamps: true});

module.exports = mongoose.model('Profiles', ProfilesSchema);
