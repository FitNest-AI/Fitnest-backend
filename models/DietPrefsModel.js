const mongoose = require('mongoose');
const {Schema} = mongoose;

const dietPrefsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  desc: {
    type: String,
    required: [true, 'desc is required'],
  },
});

module.exports = mongoose.model('Diet_Prefs', dietPrefsSchema);
