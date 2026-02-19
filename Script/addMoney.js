document.getElementById('add-money-btn').addEventListener('click', function() {
    const bankAccount = getValueFromInput('add-money-bank');
    const account = getValueFromInput('add-money-number');
    const amount = getValueFromInput('add-money-amount');
    const pin = getValueFromInput('add-money-pin');

    // Select bank
    if (bankAccount === 'Select a Bank') {
        alert('Pleace Select a Bank');
        return;
    };

    //Account number
    if (account.length !== 11) {
        alert('Invalid Account Number');
        return;
    }

    // Get Amount
    const newBalance = getBalance() + Number(amount);

    // Pin verify
    if (pin === '0987') {
        alert(`Add Money Success from ${bankAccount}`);
        setBalance(newBalance);
    } else {
        alert('Invalid Pin Number');
        return;
    }
});