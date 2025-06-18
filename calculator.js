// Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

// Get input values safely
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Display result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for each operation
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    displayResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    displayResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    displayResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    displayResult(divide(number1, number2));
});