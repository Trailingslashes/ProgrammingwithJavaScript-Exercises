let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function three(array){
	if (array.includes(3)) {
		return true
	} else {
		return false
	}
}

console.log(three(numbers1))
console.log(three(numbers2))
console.log(three(numbers3))