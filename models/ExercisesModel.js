const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema;

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
  direction: {
    type: String,
    enum: ['front', 'side'],
    required: [true, 'direction is required'],
  },
  orientation: {
    type: String,
    enum: ['potrait', 'landscape'],
    required: [true, 'orientation is required'],
  },
  instruction: {
    type: String,
    required: [true, 'instruction is required'],
  },
  start: {
    type: Object,
    required: [true, 'start is required'],
  },
  end: {
    type: Object,
    required: [true, 'end is required'],
  },
});

module.exports = mongoose.model('Exercises', ExercisesSchema);
