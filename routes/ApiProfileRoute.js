const {Router} = require('express');
const {fetchAllProfileHandler, fetchProfileHandler, insertProfileHandler, editProfileHandler} = require('../handlers/ProfileHandler');
const {isLogin} = require('../middlewares/AuthMiddleware');

// eslint-disable-next-line new-cap
const route = Router();

route.get('/all', fetchAllProfileHandler);

route.use(isLogin);
// Profile Route
route.get('/', fetchProfileHandler);
route.post('/', insertProfileHandler);
route.put('/', editProfileHandler);

module.exports = route;
