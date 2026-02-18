document.getElementById('login-btn').addEventListener('click', function() {
    const inputNumber = document.getElementById('input-number').value;
    const inputPin = document.getElementById('input-pin').value;
    // console.log(inputNumber, inputPin)
    if (inputNumber === '01781269971' && inputPin === '0987') {
        alert('Login Successful!');
        window.location.assign('./home.html');
    } else {
        alert('Login Failed!');
        return;
    }

})