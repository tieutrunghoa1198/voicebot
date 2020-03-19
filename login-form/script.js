const apiUrl = "http://localhost:8000/api/login"
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
        console.log({ err });
        $('#message').text(err.responseText)
        $('#message').css('color', 'red')
    })
})
