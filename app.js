if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const port = process.env.PORT;

// Database connection Config
require('./configs/DatabaseConfig').connect(process.env.MONGO_URI);
// Passport Config
require('./configs/PassportConfig');

// express-session init
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {secure: false},
}));

// parse cookie
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(express.json());
app.use(bodyParser.json());

// passport init
app.use(passport.initialize());
// passport session
app.use(passport.session());

// routes
app.use('/api/v1/auth', require('./routes/ApiAuthRoute'));

app.use('/api/v1/user', require('./routes/ApiUserRoute'));
app.use('/api/v1/user/profile', require('./routes/ApiProfileRoute'));
app.use('/api/v1/user/workout', require('./routes/ApiWorkoutRoute'));

app.use('/api/v1/exercise', require('./routes/ApiExerciseRoute'));
app.use('/api/v1/goal', require('./routes/ApiGoalRoute'));
app.use('/api/v1/level', require('./routes/ApiLevelRoute'));
app.use('/api/v1/target-muscle', require('./routes/ApiTargetMuscleRoute'));
app.use('/api/v1/diet-pref', require('./routes/ApiDietPrefRoute'));

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'FitNest API is up',
  });
});

app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'No results found',
  });
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
