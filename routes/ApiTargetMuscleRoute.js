const {Router} = require('express');
const {fetchAllTargetMuscleHandler, fetchTargetMuscleByIdHandler, insertTargetMuscleHandler, editTargetMuscleByIdHandler, deleteTargetMuscleByIdHandler} = require('../handlers/TargetMuscleHandler');
// const {isLogin} = require('../middlewares/AuthMiddleware');

// eslint-disable-next-line new-cap
const route = Router();

// TargetMuscle Route
route.get('/all', fetchAllTargetMuscleHandler);
route.post('/', insertTargetMuscleHandler);
route.get('/:id', fetchTargetMuscleByIdHandler);
route.put('/:id', editTargetMuscleByIdHandler);
route.delete('/:id', deleteTargetMuscleByIdHandler);

module.exports = route;
