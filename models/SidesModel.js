const mongoose = require('mongoose');
const {Schema} = mongoose;

const SidesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: [true, 'The side already exists'],
  },

  instruction: {
    type: String,
    required: [true, 'instruction is required'],
  },
});

module.exports = mongoose.model('Sides', SidesSchema);
