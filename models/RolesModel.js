const mongoose = require('mongoose');
const {Schema} = mongoose;

const rolesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
});

module.exports = mongoose.model('Roles', rolesSchema);
