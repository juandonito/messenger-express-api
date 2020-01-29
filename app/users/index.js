import express from 'express'

import * as userController from './userController'

const usersRouter = express.Router()

usersRouter.route('/')
	.post(userController.postUser)

export default usersRouter