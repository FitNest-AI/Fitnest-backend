const {Router} = require('express');
const {fetchAllWorkoutHandler, fetchWorkoutByIdHandler, insertWorkoutHandler, editWorkoutByIdHandler, deleteWorkoutByIdHandler, insertExerciseOnWorkoutByIdHandler, deleteExerciseOnWorkoutByIdHandler} = require('../handlers/WorkoutHandler');
const {isLogin} = require('../middlewares/AuthMiddleware');

// eslint-disable-next-line new-cap
const route = Router();

// Workout Route
route.get('/all', isLogin, fetchAllWorkoutHandler);
route.post('/', isLogin, insertWorkoutHandler);
route.get('/:workoutId', isLogin, fetchWorkoutByIdHandler);
route.put('/:workoutId', isLogin, editWorkoutByIdHandler);
route.delete('/:workoutId', isLogin, deleteWorkoutByIdHandler);

route.post('/:workoutId/moveset/', isLogin, insertExerciseOnWorkoutByIdHandler);

route.delete('/:workoutId/moveset/:exerciseId', isLogin, deleteExerciseOnWorkoutByIdHandler);

module.exports = route;
