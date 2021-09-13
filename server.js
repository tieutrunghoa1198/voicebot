const express = require('express')
const app = express()
const cors = require('cors')
const chatBot = require('./routers/chatbot')
const authorizeLogin = require('./routers/authorizeLogin')
const userApi = require('./routers/userApi')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const mongodb = {
    url: 'mongodb+srv://tieutrunghoa1198:th3nightaviciI@voicebotuser-gutfc.mongodb.net/test?retryWrites=true&w=majority',
    option: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}
const port = 8000


//mongodb connection
mongoose.connect(
    mongodb.url,
    mongodb.option,
    (err) => {
        if (err) console.log(err);
        else console.log('Db connect successfully.');
    }
)


// cookie
app.use(session({
    secret: 'tealnovember',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60,
        httpOnly: false
    }
}))


// apply cors
app.use(cors({ 
    origin: true,
    credentials: true
}))


app.use(express.static(__dirname + '/login-form'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.use((req, res, next) => {
    console.log('SESSIONID: ', req.sessionID);
    console.log('SESSION: ', req.session);
    next()
})

// asd
//api middleware
app.use('/api/chatbot', chatBot)
app.use('/api', authorizeLogin)
app.use('/userApi', userApi)


//test server connection
app.get('/', (req, res) => {
    res.status(200).json('Test server')
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login-form/index.html')
})


// app.post
app.listen(process.env.PORT || port, (err) => {
    if (err) console.log('There something wrong: ', err)
    else console.log('Server is using port: ', port)
})
