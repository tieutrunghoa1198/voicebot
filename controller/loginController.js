const bcrypt = require('bcryptjs')
const userController = require('./userController')

const login = ({ username, password }) =>
    new Promise((resolve, reject) => {
        console.log(username)
        userController
            .getUserForAuth(username) //send in4 to mongodb model to find username
            .then(user => {
                if(bcrypt.compareSync(password, user.password)) {
                    resolve({
                        username: user.username,
                        id: user._id
                    })
                }
                else reject({
                    status: 400,
                    err: "Incorrect password."
                })
            })
            .catch(err => // cannot find 
                reject({
                    status: 502,
                    err: "Cannot find user."
                })
            );
    });

module.exports = {
    login
};