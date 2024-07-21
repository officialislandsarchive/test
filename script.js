function updateBalance() {
    const amount = document.getElementById('amount').value;
    const balanceElement = document.getElementById('balance');
    
    if (amount) {
        balanceElement.innerText = `$${parseFloat(amount).toFixed(2)}`;
    } else {
        alert('Please enter a valid amount');
    }
}
