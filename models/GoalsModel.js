const mongoose = require('mongoose');
const {Schema} = mongoose;

const goalsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: [true, 'The goal already exists'],
  },
});

module.exports = mongoose.model('Goals', goalsSchema);
