const express = require('express')
const loginApi = express.Router()
const loginController = require('../controller/loginController')

loginApi.post("/login", (req, res) => {
    loginController
        .login(req.body)
        .then(userInfo => {
            req.session.userInfo = userInfo;
            res.send('Login successfully!');
        })
        .catch(error =>
            res.status(error.status).send(error.err));
});

loginApi.delete("/", (req, res) => {
    req.session.destroy();
    res.send("Logged out");
});

module.exports = loginApi;