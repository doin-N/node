const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/users.controller');

usersRouter.get('/', usersController.getUsers);//라우트 핸들러 뭔지 확인하기 이부분
usersRouter.get('/:userId', usersController.getUser);
usersRouter.post('/', usersController.postUser);

module.exports = usersRouter;