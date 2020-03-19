const express = require('express')
const bcrypt = require('bcryptjs')
const authApi = express()
const userModel = require('../models/userModel')

authApi.post('/', (req, res) => {
    const { username, password } = req.body
    userModel
        .findOne({ username })
        .then(userFound => {
            if (!userFound)
                res.status(404).send({ error: 'username cant be found' })
            else if (bcrypt.compareSync(password, userFound.password)) {
                req.session.username = userFound.username
                res.send('login successfully!')
            }
            else
                res.status(401).send({ error: 'wrong password' })
        })
        .catch(err => res.status(500).send({ err }))
})

module.exports = authApi
