function promptForNum(prompt) {
	let readlineSync = require('readline-sync');
	return readlineSync.question(prompt);
};

function multiply(a, b) {
	return a * b;
};

let firstNumber = promptForNum(`Enter your first number: `);
let secondNumber = promptForNum(`Enter your second number: `);
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);