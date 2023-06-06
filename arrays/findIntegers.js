function findIntegers(arr) {
	return arr.filter(number => typeof(number) === 'number');
};

console.log(findIntegers([1, 2, 3, 5, 10, 'string1', 'string2', 'string3']))

// function findIntegers(array) {
//   return array.filter(function(element) {
//     return Number.isInteger(element);
//   });
// }