// Machine id> input value.
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id, value);
    return value;
};



// Machine > balance. 
function getBalance() {
    const currentBalance = document.getElementById("balance");
    const balance = currentBalance.innerText;
    return Number(balance);
}


// Machine value Set Balance.
function setBalance(value) {
    const currentBalance = document.getElementById("balance");
    currentBalance.innerText = value;
}


// Machine > hide all > show id
function showOnly(id) {
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden'); 

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}