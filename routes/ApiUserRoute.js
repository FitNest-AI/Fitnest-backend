const {Router} = require('express');
const {fetchAllUserHandler, fetchUserHandler, editUserHandler, editUserImageHandler, editUserRoleHandler} = require('../handlers/UserHandler');
const {isLogin} = require('../middlewares/AuthMiddleware');

const {uploadToBucket} = require('../middlewares/MulterMiddleware');

// eslint-disable-next-line new-cap
const route = Router();

// User Route
route.get('/all', fetchAllUserHandler);
route.get('/', isLogin, fetchUserHandler);
route.put('/', isLogin, editUserHandler);
route.put('/image', isLogin, uploadToBucket('/avatar').single('image'), editUserImageHandler);
route.put('/role', isLogin, editUserRoleHandler);

module.exports = route;
