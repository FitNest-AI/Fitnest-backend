const mongoose = require('mongoose');
const {Schema} = mongoose;

const BlacklistTokensSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Blacklist_Tokens', BlacklistTokensSchema);
