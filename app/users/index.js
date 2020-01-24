import express from 'express'

const usersRouter = express.Router()

usersRouter.route('/')
	.get((req, res) => {
		res.sendStatus(200)
	})

export default usersRouter