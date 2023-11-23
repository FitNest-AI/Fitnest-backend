const {Router} = require('express');
const {fetchAllExerciseHandler, fetchExerciseDetailByIdHandler, insertExerciseHandler, editExerciseByIdHandler, deleteExerciseByIdHandler, searchExerciseHandler} = require('../handlers/ExerciseHandler');

const {uploadToBucket} = require('../middlewares/MulterMiddleware');

// eslint-disable-next-line new-cap
const route = Router();


// Exercise Route
route.post('/', uploadToBucket('/exercise').single('image'), insertExerciseHandler);
route.get('/all', fetchAllExerciseHandler);
route.get('/search', searchExerciseHandler);

route.get('/:id', fetchExerciseDetailByIdHandler);
route.put('/:id', uploadToBucket('/exercise').single('image'), editExerciseByIdHandler);
route.delete('/:id', deleteExerciseByIdHandler);

module.exports = route;
