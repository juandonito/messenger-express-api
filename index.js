import 'dotenv/config'
import http from 'http'
import app from './app'

const PORT = process.env.PORT || 4000

app.set('port', PORT)

const server = http.createServer(app)

server.listen(PORT, () => {
	console.log(`Refacto listening on port ${PORT}`)
})