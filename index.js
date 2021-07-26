require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`run: http://localhost:${port}`))