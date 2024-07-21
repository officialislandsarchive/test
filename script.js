document.addEventListener('DOMContentLoaded', () => {
    const balanceAmount = document.getElementById('balance-amount');
    const transactionList = document.getElementById('transaction-list');
    const addTransactionButton = document.getElementById('add-transaction');

    let balance = 0;
    let transactions = [];

    addTransactionButton.addEventListener('click', () => {
        const amount = (Math.random() * 100).toFixed(2);
        const type = Math.random() > 0.5 ? 'Received' : 'Sent';
        const transaction = { type, amount };

        transactions.push(transaction);
        updateUI();
    });

    function updateUI() {
        balance = transactions.reduce((acc, trans) => {
            return trans.type === 'Received' ? acc + parseFloat(trans.amount) : acc - parseFloat(trans.amount);
        }, 0);

        balanceAmount.textContent = balance.toFixed(2);

        transactionList.innerHTML = '';
        transactions.forEach(trans => {
            const li = document.createElement('li');
            li.textContent = `${trans.type} $${trans.amount}`;
            transactionList.appendChild(li);
        });
    }
});
