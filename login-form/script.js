const apiUrl = "http://localhost:8080/api/auth/login"
$('#loginForm').on('submit', function (event) {
    event.preventDefault()
    const username = $('#inputEmail').val()
    const password = $('#inputPassword').val()
    $.ajax({
        url: apiUrl,
        type: "POST",
        data: {
            username,
            password
        }
    }).then(resp => {
        console.log({ resp });
        $('#message').text(resp)
        $('#message').css('color', 'green')
    }).catch(err => {
        console.log({ err: err });
        $('#message').text(err.responseJSON.error)
        $('#message').css('color', 'red')
    })
})
