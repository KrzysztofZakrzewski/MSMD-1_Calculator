const currentNumber = document.querySelector('.currentNumber');

const previusNumber = document.querySelector('.previusNumber p');

const mathSihg = document.querySelector('.mathSihg');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const calculatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history-btn');

let result = '';
// functions

function displayNumbers() {
	if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
	if (this.textContent === '.' && currentNumber.innerHTML === '')
		return (currentNumber.innerHTML = '.0');

	currentNumber.innerHTML += this.textContent;
}

function operate() {
	if (currentNumber.innerHTML === '' && this.textContent === '-') {
		currentNumber.innerHTML = '-';
	} else if (currentNumber.innerHTML === '') {
		return;
	}

	if (mathSihg.innerHTML !== '') {
		showResults();
	}

	previusNumber.innerHTML = currentNumber.innerHTML;
	mathSihg.innerHTML = this.textContent;
	currentNumber.innerHTML = '';
}

function showResults() {}

function clearScreen() {}

function clearHistory() {}

// Liseners
operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResults);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
	button.addEventListener('click', displayNumbers);
});

historyBtn.addEventListener('click', clearHistory);
