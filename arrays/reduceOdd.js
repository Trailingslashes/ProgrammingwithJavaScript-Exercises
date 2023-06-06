let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
	let newArray = array.map(array => array.length);
	return newArray.filter((num) => num % 2 === 1);
}



console.log(oddLengths(arr));