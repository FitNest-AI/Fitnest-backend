const {Router} = require('express');
const {fetchAllLevelHandler, fetchLevelByIdHandler, insertLevelHandler, editLevelByIdHandler, deleteLevelByIdHandler} = require('../handlers/LevelHandler');
// const {isLogin} = require('../middlewares/AuthMiddleware');

// eslint-disable-next-line new-cap
const route = Router();

// Level Route
route.get('/all', fetchAllLevelHandler);
route.post('/', insertLevelHandler);
route.get('/:id', fetchLevelByIdHandler);
route.put('/:id', editLevelByIdHandler);
route.delete('/:id', deleteLevelByIdHandler);

module.exports = route;
