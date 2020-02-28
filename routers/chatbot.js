const express = require('express')
const chatBot = express.Router()
const api_key = 'tieutrunghoa.1102'

chatBot.use((req, res, next) => {
    next()
})

chatBot.post('/', (req, res) => {
    const { question } = req.body
    // console.log(req)
    if (question === 'Hôm nay ăn gì ?')
        res.status(200).json('Ăn cứt')
    else if (question !== '')
        res.json(question)
    else
        res.status(404).json('there is no data')
    //bot answer go here 
})



/*
    search function to optimize process time 
    use binary search 
    set up a question list contains: 
        - query: the whole question
        - intents: the main meaning of the question 
        - entities: ......... 
*/

module.exports = chatBot