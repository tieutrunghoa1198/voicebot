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
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api/chatbot', chatBot)
app.get('/', (req, res) => {
    res.status(200).json('Test server')
})

// app.post

app.listen(process.env.PORT || port, (err) => {
    if (err) console.log('There something wrong: ', err)
    else console.log('Server is using port: ', port)
})
