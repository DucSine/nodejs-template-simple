require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

const apiRoute = require('./routes/api.routes')

app.get('/', (req, res) => res.send('Hello'))
app.use('/api', apiRoute)

app.listen(port, () => console.log(`run: http://localhost:${port}`))