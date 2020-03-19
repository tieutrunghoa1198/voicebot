const bcrypt = require('bcryptjs')
const userController = require('./userController')

const login = ({ username, password }) =>
    new Promise((resolve, reject) => {
        console.log(username)
        userController
            .getUserForAuth(username) //send in4 to mongodb model to find username
            .then(user => {
                resolve({
                    username: user.username,
                    id: user._id
                })
            })
            .catch(err => // cannot find 
                reject({
                    status: 502,
                    err: err
                })
            );
    });

module.exports = {
    login
};