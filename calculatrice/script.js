let currentInput = '';
let result = 0;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
    checkParity();
}

function operation(op) {
    currentInput += ` ${op} `;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    result = 0;
    updateDisplay();
    document.getElementById('parity-result').textContent = 'Parité: -';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
        checkParity();
    } catch (e) {
        currentInput = 'Erreur';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function checkParity() {
    const number = parseInt(currentInput.replace(/[^\d.-]/g, ''), 10);
    if (!isNaN(number)) {
        const parity = (number % 2 === 0) ? 'Pair' : 'Impair';
        document.getElementById('parity-result').textContent = `Parité: ${parity}`;
    }
}
