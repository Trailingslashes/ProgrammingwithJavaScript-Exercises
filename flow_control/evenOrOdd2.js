function evenOrOdd(n) {
	if (!Number.isInteger(n)) {
		console.log("Please enter a number")
	} else if (n % 2 === 0) { 
			console.log("even")
	} else {
		console.log("odd")
	}
} 

evenOrOdd(5)


// function evenOrOdd(number) {
//   if (!Number.isInteger(number)) {
//     console.log('Sorry, the value you passed is not an integer');
//     return;
//   }

//   if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }