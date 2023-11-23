const mongoose = require('mongoose');
const {Schema} = mongoose;

const TargetMuscleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
});

module.exports = mongoose.model('Target_Muscles', TargetMuscleSchema);
