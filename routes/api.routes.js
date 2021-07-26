const express = require('express')

const route = express.Router()
const handleError = require('../helpers/handleError.helper')

route.use('/examples', require('./examples.routes'))
route.use(handleError)

module.exports = route