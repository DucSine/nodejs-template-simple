require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const { app, server } = require('./helpers/handleSocketIo.helper')
const port = process.env.PORT || 3000

const { serve, swaggerSetup } = require('./configs/swagger')

const connectDB = require('./configs/db')
const apiRoute = require('./routes/api.routes')

connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/documentation', serve, swaggerSetup)
app.use('/api', apiRoute)

app.get('/', (req, res) => res.send('Hello'))

server.listen(port, () => console.log(`run: http://localhost:${port}`))