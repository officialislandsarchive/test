function showSection(sectionId) {
    const sections = document.querySelectorAll('.content > div');
    sections.forEach(section => section.classList.remove('active'));

    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}

function showHome() {
    showSection('balance-section');
}

function showAddMoney() {
    showSection('add-money-section');
}

function updateBalance() {
    const amount = document.getElementById('amount').value;
    const balanceElement = document.getElementById('balance');
    
    if (amount) {
        balanceElement.innerText = `$${parseFloat(amount).toFixed(2)}`;
        showHome();
    } else {
        alert('Please enter a valid amount');
    }
}

// Initialize home view
document.addEventListener('DOMContentLoaded', (event) => {
    showHome();
});
