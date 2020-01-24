import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send({
		message : 'Api running'
	})
})

export default app