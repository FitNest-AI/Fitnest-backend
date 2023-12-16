const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema;

const bcrypt = require('bcrypt');

require('../models/RolesModel');
require('../models/ProfilesModel');

const usersSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    index: true,
    unique: [true, 'Email address is already registered'],
    required: [true, 'Email address is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
    default: `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}/avatar/default.png`,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  profileId: {
    type: ObjectId,
    required: false,
    ref: 'Profiles',
  },
  roleId: {
    type: ObjectId,
    required: true,
    ref: 'Roles',
  },
  token: {
    type: String,
    required: false,
  },
}, {timestamps: true});

usersSchema.pre('save', async function(next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

module.exports = mongoose.model('Users', usersSchema);
