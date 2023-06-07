let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, regex) {
	let matches = []
	for (let v = 0; v < array.length; v++) {
		if (array[v].match(regex)) {
			matches.push(array[v]);
		}
	}
	return matches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']


// function allMatches(words, pattern) {
//   return words.filter((word) => pattern.test(word));
// }