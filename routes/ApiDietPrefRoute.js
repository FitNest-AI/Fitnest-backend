const {Router} = require('express');
const {fetchAllDietPrefHandler, fetchDietPrefByIdHandler, insertDietPrefHandler, editDietPrefByIdHandler, deleteDietPrefByIdHandler} = require('../handlers/DietPrefHandler');
// const {isLogin} = require('../middlewares/AuthMiddleware');

// eslint-disable-next-line new-cap
const route = Router();

// DietPref Route
route.get('/all', fetchAllDietPrefHandler);
route.post('/', insertDietPrefHandler);
route.get('/:id', fetchDietPrefByIdHandler);
route.put('/:id', editDietPrefByIdHandler);
route.delete('/:id', deleteDietPrefByIdHandler);

module.exports = route;
