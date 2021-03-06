const express = require('express')
const chatBot = express.Router()
const answerController = require('../controller/answerQuest')


chatBot.use((req, res, next) => {
    next()
})

chatBot.post('/', (req, res) => {
    const { question } = req.body
    //bot answer go here 
    console.log(question)
    answerController.answer(question)
        .then(answer => {
            console.log('success')
            res.status(200).json(answer)
        })
        .catch(err => {
            console.log(err.msg)
            res.status(err.err).send(err.msg)
        })
})

/*
    - QUARANTINE TIME
    search function to optimize process time 
    use binary search 
    set up a question list contains: 
        - query: the whole question
        - intents: the main meaning of the question 
        - entities: ......... 
*/

module.exports = chatBot