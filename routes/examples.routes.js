const express = require('express')
const { helloWord } = require('../controllers/examples.controllers')

const { } = require('../controllers/examples.controllers')

const route = express.Router()

route.get('/HelloWord', helloWord)

module.exports = route