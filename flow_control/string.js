function capitalize(s) {
	if (String(s.length) >= 10 ) {
		return s.toUpperCase();
	} else {
		return s
	}
}

console.log(capitalize('hellllooooooooo'))
console.log(capitalize('hello'))