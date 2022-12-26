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

function showResults() {
	if (previusNumber.innerHTML === '' || currentNumber.innerHTML === '') {
		return;
	}

	let a = Number(previusNumber.innerHTML);
	let b = Number(currentNumber.innerHTML);
	let operator = mathSihg.innerHTML;

	switch (operator) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case 'x':
			result = a * b;
			break;
		case ':':
			result = a / b;
			break;
		case '^2':
			result = b ** a;
			break;
	}

	addToHistory();
	historyBtn.classList.add('active');
	currentNumber.innerHTML = result;
	previusNumber.innerHTML = '';
	mathSihg.innerHTML = '';
}

function addToHistory() {
	const newHistoryItem = document.createElement('li');
	newHistoryItem.innerHTML = `${currentNumber.innerHTML}${mathSihg.innerHTML} ${previusNumber.innerHTML} = ${result}`;
	newHistoryItem.classList.add('history-item');
	calculatorHistory.appendChild(newHistoryItem);
}

function clearScreen() {
	result = '';
	currentNumber.innerHTML = '';
	previusNumber.innerHTML = '';
	mathSihg.innerHTML = '';
}

function clearHistory() {
	calculatorHistory.textContent = '';
	if (calculatorHistory.textContent === '') {
		historyBtn.classList.remove('active');
	}
}

// Liseners
operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResults);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
	button.addEventListener('click', displayNumbers);
});

historyBtn.addEventListener('click', clearHistory);
