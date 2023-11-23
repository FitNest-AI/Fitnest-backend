const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema;

const WorkoutsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: [true, 'The workout already exists'],
  },
  desc: {
    type: String,
    required: false,
  },
  day: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  rest: {
    type: Number,
    min: [15, 'Too low. Please enter a value >= 15'],
    max: [120, 'Too high. Please enter a value <= 120'],
  },
  moveset: [{
    set: {
      type: Number,
      required: true,
      min: [1, 'Too low. Please enter a value >= 1'],
    },
    rep: {
      type: Number,
      required: true,
      min: [1, 'Too low. Please enter a value >= 1'],
    },
    exerciseId: {
      type: ObjectId,
      required: true,
      ref: 'Exercises',
    },
  }],
  userId: {
    type: ObjectId,
    required: [true, 'userId is required'],
    ref: 'Users',
  },
}, {timestamps: true});

module.exports = mongoose.model('Workouts', WorkoutsSchema);
