const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hello World from Express!')
})

app.get('/express', (req, res) => {
	res.send('Hello World from Express!')
})

module.exports = { app }
