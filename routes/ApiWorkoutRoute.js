const {Router} = require('express');
const {fetchAllWorkoutHandler, fetchWorkoutByIdHandler, insertWorkoutHandler, editWorkoutByIdHandler, deleteWorkoutByIdHandler, insertMovesetOnWorkoutByIdHandler, deleteMovesetOnWorkoutByIdHandler} = require('../handlers/WorkoutHandler');
const {isLogin} = require('../middlewares/AuthMiddleware');

// eslint-disable-next-line new-cap
const route = Router();

// Workout Route
route.get('/all', fetchAllWorkoutHandler);
route.post('/', isLogin, insertWorkoutHandler);
route.get('/:id', isLogin, fetchWorkoutByIdHandler);
route.put('/:id', isLogin, editWorkoutByIdHandler);
route.delete('/:id', isLogin, deleteWorkoutByIdHandler);

route.post('/:id/moveset/', isLogin, insertMovesetOnWorkoutByIdHandler);

route.delete('/:id/moveset/:movesetId', isLogin, deleteMovesetOnWorkoutByIdHandler);

module.exports = route;
