document.getElementById('cashout-btn').addEventListener('click', function() {
    const cashoutNumberInput = getValueFromInput("cashout-number");
    const cashoutAmountInput = getValueFromInput('cashout-amount');
    const currentBalance = document.getElementById('balance');
    const balance = currentBalance.innerText;
    const cashoutPinInput = getValueFromInput('cashout-pin');

     if (cashoutNumberInput.length !== 11) {
        alert('Invalid Agent Number');
        return;
    };

    const newBalance = Number(balance) - Number(cashoutAmountInput);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    };

    if (cashoutPinInput === '0987') {
        alert('Cashout Successful');
        currentBalance.innerText = newBalance;
    } else {
        alert('Invalid Pin');
        return;
    };
})





// document.getElementById('cashout-btn').addEventListener("click", function() {
//     const cashoutInput = document.getElementById("cashout-number").value;
//     const cashoutAmountInput = document.getElementById('cashout-amount').value;
//     const currentBalance = document.getElementById('balance');
//     const balance = currentBalance.innerText;
//     const cashoutPinInput = document.getElementById('cashout-pin').value;

//     const newBalance = Number(balance) - Number(cashoutAmountInput);

//     if (cashoutInput.length !== 11) {
//         alert('Invalid Agent Number');
//         return;
//     }

//     if (newBalance < 0) {
//         alert('Invalid Amount');
//         return;
//     }

//     if (cashoutPinInput === '0987') {
//         alert('Cashout Successful');
//         currentBalance.innerText = newBalance;
//     } else {
//         alert('Invalid Pin');
//         return;
//     }
// })