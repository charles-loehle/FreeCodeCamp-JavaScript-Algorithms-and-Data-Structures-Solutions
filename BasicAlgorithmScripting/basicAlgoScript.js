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

// console.log(
// 	findLongestWordLength(
// 		'What if we try a super-long word such as otorhinolaryngology'
// 	)
// );

/* ================================================= */
/* Return Largest Numbers in Arrays */
function largestOfFour(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		// console.log(arr[i].sort((a, b) => a - b))
		let sortedArrs = arr[i].sort((a, b) => a - b);
		console.log(sortedArrs[sortedArrs.length - 1]);
		newArr.push(sortedArrs[sortedArrs.length - 1]);
	}

	return newArr;
}

// console.log(
// 	largestOfFour([
// 		[4, 5, 1, 3],
// 		[13, 27, 18, 26],
// 		[32, 35, 37, 39],
// 		[1000, 1001, 857, 1],
// 	])
// );

/* ================================================= */
/* Confirm the Ending */
// https://reactgo.com/javascript-variable-regex/
function confirmEnding(str, target) {
	let regexVar = target + '$';
	const regex = new RegExp(regexVar, 'i');

	return regex.test(str);
}

// console.log(confirmEnding('Connor', 'nor'));

/* ================================================= */
/* Repeat a String Repeat a StringPassed */
function repeatStringNumTimes(str, num) {
	let newStr = '';
	if (num <= 0) {
		return '';
	}
	for (let i = 0; i < num; i++) {
		newStr += str;
	}

	return newStr;
}

// console.log(repeatStringNumTimes('abc', 3));
