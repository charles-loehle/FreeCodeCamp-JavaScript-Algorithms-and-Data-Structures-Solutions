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

/* ============================================= */
/* Truncate a String */
function truncateString(str, num) {
	if (num >= str.length) {
		return str.slice(0, num);
	} else {
		return str.slice(0, num) + '...';
	}
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

/* ============================================= */
/* Finders Keepers */
function findElement(arr, func) {
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		// console.log(func(arr[i]))
		if (func(arr[i]) === true) {
			return (num = arr[i]);
		} else {
			num = undefined;
		}
	}
	return num;
}

// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))

/* =========================== */
/* Title Case a Sentence */
function titleCase(str) {
	const strToArray = str.toLowerCase().split(' ');
	let newArr = [];
	for (let i = 0; i < strToArray.length; i++) {
		//console.log(strToArray[i])
		newArr.push(strToArray[i][0].toUpperCase() + strToArray[i].substring(1));
	}
	return newArr.join(' ');
}

// console.log(titleCase("I'm a little tea pot"));

/* ========================================= */
/* Slice and Splice UNFINISHED */
function frankenSplice(arr1, arr2, n) {
	return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/* ========================================= */
/* Falsey Bouncer */

function bouncer(arr) {
	const mapped = arr.filter(item => {
		if (
			item !== '' ||
			item !== false ||
			item !== NaN ||
			item !== null ||
			item !== 0
		)
			return item;
	});

	return mapped;
}

console.log(bouncer([7, 'ate', '', false, 9, NaN]));
// false, null, 0, "", undefined, and NaN

function bouncer2(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		console.log(typeof arr[i]);
		// if statement checks for falsiness or truthiness
		if (arr[i]) {
			console.log(arr[i]);
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

// console.log(bouncer2([7, "ate", "", false, 9, NaN, 0]));

/* ========================================= */
/* Where Do I Belong */
function getIndexToIns(arr, num) {
	arr.push(num);
	let newArr = [];
	const sorted = arr.sort((a, b) => a - b);
	for (let i = 0; i < sorted.length; i++) {
		// console.log(sorted[i] === num)
		if (sorted[i] === num) {
			newArr.push(i);
		}
	}
	return newArr[0];
}

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

/* ========================================= */
/* Mutations */
// https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
function mutation(arr) {
	const array1 = arr[0].toLowerCase().split('');
	const array2 = arr[1].toLowerCase().split('');
	// console.log(array2)
	const mappedArray = array2.map(value => array1.includes(value));
	// console.log(mappedArray);
	// console.log(mappedArray.includes(false))

	if (mappedArray.includes(false)) {
		return false;
	} else {
		return true;
	}
}

// console.log(mutation(["Alien", "line"]));

/* ========================================= */
/* Chunky Monkey */
function chunkArrayInGroups(arr, size) {
	let tempArray = [];
	for (let i = 0; i < arr.length; i += size) {
		// console.log(arr.slice(i, i + size))
		// console.log(tempArray);
		tempArray.push(arr.slice(i, i + size));
	}
	// console.log(tempArray);
	return tempArray;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

// program to split array into smaller chunks
// https://www.programiz.com/javascript/examples/split-array
function splitIntoChunk(arr, chunk) {
	for (i = 0; i < arr.length; i += chunk) {
		let tempArray;
		tempArray = arr.slice(i, i + chunk);
		console.log(tempArray);
	}
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);
