document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'o' || e.key === 'O') {
            const hiddenSection = document.getElementById('hidden-section');
            hiddenSection.style.display = hiddenSection.style.display === 'flex' ? 'none' : 'flex';
        }
    });
});

function updateBalance() {
    const amount = document.getElementById('fake-amount').value;
    const balanceElement = document.getElementById('balance');
    
    if (amount) {
        balanceElement.innerText = `$${parseFloat(amount).toFixed(2)}`;
    } else {
        alert('Please enter a valid amount');
    }
}
