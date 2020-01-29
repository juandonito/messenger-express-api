import express from 'express'

import * as userController from './userController'

const usersRouter = express.Router()

usersRouter.route('/')
	.get(userController.getUsers)
	.post(userController.postUser)

usersRouter.route('/:_id')
	.get(userController.getUser)
	.delete(userController.deleteUser)

export default usersRouter