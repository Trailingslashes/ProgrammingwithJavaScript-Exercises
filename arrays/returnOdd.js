let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];



// function oddLengths(arr) {
// 	return arr.reduce((length, str) => {
// 		length.push(str.length);
// 			return length
// 	}, []);
// }
// console.log(oddLengths(arr));

function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

console.log(oddLengths(arr));