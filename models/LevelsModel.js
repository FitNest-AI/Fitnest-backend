const mongoose = require('mongoose');
const {Schema} = mongoose;

const levelsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: [true, 'The level already exists'],
  },
});

module.exports = mongoose.model('Levels', levelsSchema);
