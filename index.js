require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const $ = require('./functions/message')

const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Message Service')
})

app.post('/receive', function (req, res) {
    const body = req.body

    if (body.type === 'text') {
       $.receive(body)
    }

    res.end()
})

app.listen(process.env.PORT || 8000, function () {
    console.log('[server]: I\'m running')
})