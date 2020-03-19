const userModel = require('../models/userModel')

const createUser = ({ username, password }) =>
    new Promise((resolve, reject) => {
        userModel
            .create({
                username,
                password
            })
            .then(user => {
                resolve(user)
            })
            .catch(err => {
                reject(err)
            })
    })

const getAllUser = (page) =>
    new Promise((resolve, reject) => {
        userModel
            .find({ active: true })
            .sort({ createAt: -1 })
            .skip((page - 1) * 20)
            .limit(20)
            .select("-active -password -__v")
            .then(user => {
                resolve(user)
            })
            .catch(err => {
                reject(err)
            })
    })

const updatePass = (id, pass) =>
    new Promise((resolve, reject) => {
        userModel
            .findById(id)
            .then(user => {
                user.password = pass
                return user.save()
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })

const getUserForAuth = username =>
    new Promise((resolve, reject) => {
        console.log(username)
        userModel
            .findOne({ username })
            .select("username password _id")
            .then(user => resolve(user))
            .catch(err => reject(err));
    });

module.exports = {
    createUser,
    getAllUser,
    updatePass,
    getUserForAuth
}