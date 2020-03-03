const questData = require('./question-list.json')

const answer = (question) => new Promise((resolve, reject) => {
    if ( question === questData[0].question ) {
        resolve('Mình là rô bốt trả lời tự động do anh tiêu hòa sáng chế')
    }
    else if ( question === questData[1].question ) {
        resolve('Làm tí giải cứu tôm hùm nhé')
    }
    else if ( question === questData[2].question) {
        resolve('Giờ làm việc của vietcombank từ sáng tới khi nào chán thì đóng cửa nhé')
    }
    else { 
        const errMsg = {
            msg: 'errMsg',
            err: 500
        }
        reject(errMsg)
    }
})

module.exports = { 
    answer
}