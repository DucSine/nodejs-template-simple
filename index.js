require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const { app, server } = require('./helpers/handleSocketIo.helper')
const port = process.env.PORT || 3000

const apiRoute = require('./routes/api.routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => res.send('Hello'))
app.use('/api', apiRoute)

server.listen(port, () => console.log(`run: http://localhost:${port}`))