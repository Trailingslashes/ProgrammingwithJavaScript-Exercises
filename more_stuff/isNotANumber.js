// function isNotANumber(number) {
// 	if (typeof number != parseInt(number)) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

function isNotANumber(value) {
	return value !== value;
}

console.log(isNotANumber('sdfsdfsff'))