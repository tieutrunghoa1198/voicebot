const express = require('express')
const app = express()
const cors = require('cors')
const chatBot = require('./routers/chatbot')
const port = 8000
const bodyParser = require('body-parser')
app.use(cors({ 
    origin: true,
    credentials: true
}))
//API middleware
// app.use('/api/chatbot', chatBot)
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/test', (req, res) => {
    res.status(200).json('Test server')
})

app.listen(port, (err) => {
    if (err) console.log('There something wrong: ', err)
    else console.log('Server is using port: ', port)
})
