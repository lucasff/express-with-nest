const express = require('express')
const expressApp = express()

expressApp.get('/', (req, res) => {
	res.send('Hello World from Express!')
})

expressApp.get('/express', (req, res) => {
	res.send('Hello World from Express!')
})

module.exports = { expressApp }
