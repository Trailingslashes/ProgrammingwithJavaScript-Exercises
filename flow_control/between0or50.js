// function numberRange(n) {
// 	if (n <= 50) {
// 		console.log(`${n} is between 0 and 50`);
// 	} else if (n <= 100) {
// 		console.log(`${n} is between 51 and 100`);
// 	} else if (n > 100) {
// 		console.log(`${n} is greater than 100`);
// 	} else if (n < 0){
// 		console.log(`${n} is less than 0`);
// 	} else {
// 		console.log("No number entered");
// 	}
// }
// numberRange(101)


function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}