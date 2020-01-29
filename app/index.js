import express from 'express'
import bodyParser from 'body-parser'

import dbConnect from './db'

import users from './users'

dbConnect()

const app = express()

// Middlewares

app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

// Routes

app.use('/users', users)

app.get('/', (req, res) => {
	res.send({
		message : 'Api running'
	})
})

export default app