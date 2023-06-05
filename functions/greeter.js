function greeter(firstName, secondName) {
	return firstName + " " + secondName;
}

console.log(greeter("Cole", "Phillips"));


function getName(question) {
	let readlineSync = require('readline-sync');
	let name = readlineSync.question(question);
	return name
}

let firstName = getName("What is your first name? ")
let secondName = getName("What is your second name? ")
console.log(`Hello, ${firstName} ${secondName}`)