const {Router} = require('express');
const {fetchAllGoalHandler, fetchGoalByIdHandler, insertGoalHandler, editGoalByIdHandler, deleteGoalByIdHandler} = require('../handlers/GoalHandler');
// const {isLogin} = require('../middlewares/AuthMiddleware');

// eslint-disable-next-line new-cap
const route = Router();

// Goal Route
route.get('/all', fetchAllGoalHandler);
route.post('/', insertGoalHandler);
route.get('/:id', fetchGoalByIdHandler);
route.put('/:id', editGoalByIdHandler);
route.delete('/:id', deleteGoalByIdHandler);

module.exports = route;
