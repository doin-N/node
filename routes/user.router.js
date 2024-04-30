const express = require('express');
const userRouter = express.Router();
const usersController = require('../controllers/users.controller');

userRouter.get('/', usersController.getUsers);//라우트 핸들러 뭔지 확인하기 이부분
userRouter.get('/:userId', usersController.getUser);
userRouter.post('/', usersController.postUser);

module.exports = userRouter;