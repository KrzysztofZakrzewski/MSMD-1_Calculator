const currentNumber = document.querySelector('.currcurrentNumber');

const previusNumber = document.querySelector('.previusNumber p');

const mathSihg = document.querySelector('.mathSihg');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history-btn');

let result = '';

// Liseners
operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResults);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
	button.addEventListener('click', displayNumbers);
});

historyBtn.addEventListener('click', clearHistory);
