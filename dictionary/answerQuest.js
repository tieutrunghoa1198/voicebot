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
    else if ( question === questData[3].question || question === questData[10].question) {
        resolve('Bạn bao nhiêu tuổi nhỉ ?')
    }
    else if ( question === questData[4].question) {
        resolve('Chà, có vẻ như bạn chưa đủ điều kiện để có thể vay rồi.')
    }
    else if ( question === questData[5].question) {
        resolve('Bạn cần phô tô chứng minh thư hoặc hộ khẩu, chứng minh công việc hiện tại và thu nhập của mình nhé.')
    }
    else if ( question === questData[6].question) {
        resolve('Bạn cần Hợp đồng lao động và xác nhận công tác hoặc Bảo hiểm y tế nhé.')
    }
    else if ( question === questData[7].question || question === questData[9].question) {
        resolve('Bạn cần Sao kê lương, xác nhận tiền mặt 3 tháng gần nhất hoặc hợp đồng bảo hiểm nhân thọ hoặc thẻ tín dụng nhé.')
    }
    else if ( question === questData[8].question) {
        resolve('Tối đa là 500 triệu nhé.')
    }
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