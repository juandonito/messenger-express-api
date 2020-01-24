import express from 'express'

import * as userController from './userController'

const usersRouter = express.Router()

usersRouter.route('/')
	.get((req, res) => {
		res.sendStatus(200)
	})
	.post(userController.postUser)

export default usersRouter