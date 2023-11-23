const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema;

require('./SidesModel');
require('./TargetMusclesModel');
require('./LevelsModel');

const ExercisesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: [true, 'The Exercise already exists'],
  },
  desc: {
    type: String,
    required: [true, 'desc is required'],
  },
  image: {
    type: String,
    required: [true, 'image is required'],
  },
  levelId: {
    type: ObjectId,
    required: [true, 'levelId is required'],
    ref: 'Levels',
  },
  targetMuscleId: [{
    type: ObjectId,
    required: [true, 'targetMuscleId is required'],
    ref: 'Target_Muscles',
  }],
  sideId: {
    type: ObjectId,
    required: [true, 'sideId is required'],
    ref: 'Sides',
  },
  orientation: {
    type: String,
    required: [true, 'orientation is required'],
  },
  instruction: {
    type: String,
    required: [true, 'instruction is required'],
  },
});

module.exports = mongoose.model('Exercises', ExercisesSchema);
