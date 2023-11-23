const mongoose = require('mongoose');

exports.connect = async (MONGO_URI) => {
  try {
    // Connecting to the database
    const db = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    // useCreateIndex: true, // make this true
    // autoIndex: true, // make this also true
    });
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error) {
    console.log('database connection failed. exiting now...');
    console.error(error);
    process.exit(1);
  }
};
