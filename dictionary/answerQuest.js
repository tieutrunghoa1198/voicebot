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
    else if ( question === questData[3].question) {
        resolve('Bạn bao nhiêu tuổi nhỉ ?')
    }
    else if ( question === questData[4].question) {
        resolve('Chà, có vẻ như bạn chưa đủ độ tuổi để ăn chơi òi, hẹn bạn 1 mùa xuân khác nhé.')
    }
    // else if ( question === questData[5].question) {
    //     resolve('')
    // }
    // else if ( question === questData[6].question) {
    //     resolve('')
    // }
    // else if ( question === questData[7].question) {
    //     resolve('')
    // }
    // else if ( question === questData[8].question) {
    //     resolve('')
    // }
    // else if ( question === questData[9].question) {
    //     resolve('')
    // }
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