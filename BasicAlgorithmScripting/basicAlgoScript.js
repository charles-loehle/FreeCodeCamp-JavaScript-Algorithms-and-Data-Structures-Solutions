/* ================================= */
/* Convert Celsius to Fahrenheit */
function convertToF(celsius) {
	let fahrenheit;
	// Celsius to Fahrenheit = Celsius * 9/5 + 32
	fahrenheit = (celsius * 9) / 5 + 32;
	return fahrenheit;
}

// console.log(convertToF(-10));

/* ================================================= */
/* Reverse a String */
function reverseString(str) {
	return str.split('').reverse().join('');
}

// console.log(reverseString('hello'));

/* ================================================= */
/* Factorialize a Number */
function factorialize(num) {
	if (num === 1 || num === 0) {
		return 1;
	}

	return num * factorialize(num - 1);
}

// console.log(factorialize(5));

/* ================================================= */
/* Find the Longest Word in a String */
function findLongestWordLength(str) {
	console.log(str.split(' ').map(item => item.length));

	const strArr = str
		.split(' ')
		.map(item => item.length)
		.sort((a, b) => a - b);

	return strArr[strArr.length - 1];
}

console.log(
	findLongestWordLength(
		'What if we try a super-long word such as otorhinolaryngology'
	)
);
