const express = require('express')
const userApi = express.Router()
// const userModel = require('../models/userModel')
const userController = require('../controller/userController')
/* 
    Middleware always has the first position in source code
    http://localhost:8080/api/user/......

*/
userApi.use((req, res, next) => {
    console.log('login pass')
    next()
})

//create new user 
userApi.post('/create', (req, res) => {
    userController
        .createUser(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                Error: err,
                Msg: 'Cannot create user.'
            })
        })
})

module.exports = userApi

