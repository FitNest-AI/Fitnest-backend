const mongoose = require('mongoose');
const {Schema} = mongoose;

const ConditionsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
});

module.exports = mongoose.model('Conditions', ConditionsSchema);
