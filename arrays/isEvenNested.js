let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// for (let i = 0; i < myArray.length; i++) {
// 	if (i % 2 === 0) {
// 		console.log(myArray[i])
// 	}
// }

for (let i = 0; i < myArray.length; i++) {
	for (j = 0; j < myArray[i].length; j+=1) {
		let evenNumbers = myArray[i][j];
		if (evenNumbers % 2 === 0)
			console.log(evenNumbers);
	}
}

// myArray.forEach(function(nestedArray) {
//   nestedArray.forEach(function(value) {
//     if (value % 2 === 0) {
//       console.log(value);
//     }
//   });
// });