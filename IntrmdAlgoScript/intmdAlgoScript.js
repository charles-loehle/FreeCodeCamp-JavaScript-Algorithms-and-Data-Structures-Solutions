/* ================================================== */
/* Sum All Numbers in a Range */
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first
function sumAll(arr) {
	// let n = 0;
	let sortedArr = arr.sort((a, b) => a - b);
	// console.log(sortedArr);
	let sum = 0;
	let newArr = [];

	// create range of numbers
	for (let i = arr[0]; i <= sortedArr[1]; i++) {
		const element = i;
		// console.log(element);
		newArr.push(element);
	}

	// add range of numbers
	// using reduce or for loop
	// return newArr.reduce((acc, curr) => acc + curr);
	for (let i = 0; i < newArr.length; i++) {
		sum += newArr[i];
	}

	return sum;
}

//console.log(sumAll([4, 1]));

/* ================================================== */
/* Diff Two Arrays */
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.
// I googled this one
function diffArray(arr1, arr2) {
	const spreaded = [...arr1, ...arr2];
	return spreaded.filter(el => {
		return !(arr1.includes(el) && arr2.includes(el));
	});
}
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/* ======================================================= */
/* Seek and Destroy */
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
	let arr1 = [...arguments[0]];
	// console.log(arr1);
	let arr2 = [...arguments].slice(1);
	// console.log(arr2);
	let argsArr = [...arr1, ...arr2];
	// console.log(argsArr);
	return argsArr.filter(el => {
		return !(arr1.includes(el) && arr2.includes(el));
	});
}
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // remove the 2s, 3s and 5s from arr

/* ============================================== */
/* Wherefore art thou */
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).

// https://stackoverflow.com/questions/6237537/finding-matching-objects-in-an-array-of-objects
function whatIsInAName(collection, source) {
	return collection.filter(function (entry) {
		return Object.keys(source).every(function (key) {
			return entry[key] === source[key];
		});
	});
}
var collection = [
	{ color: 'blue' },
	{ color: 'green' },
	{ color: 'red' },
	{ color: 'green' },
];

var collection2 = [
	{ apple: 1, bat: 2 },
	{ apple: 1 },
	{ apple: 1, bat: 2, cookie: 2 },
];

// console.log(whatIsInAName(collection, { color: 'green' }));

// console.log(whatIsInAName(collection2, { apple: 1, cookie: 2 }));

/* ============================================== */
// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	// regex that matches spaces or uppercase or underscore or dash. Uppercase part contains a positive lookahead to keep the capital letters
	const regex = /\s|(?=[A-Z])|_|-/;

	const splitStr = str.split(regex);

	return splitStr.join('-').toLowerCase();
}

// console.log(spinalCase('AllThe-small Things')); // should return the string this-is-spinal-tap.

/* ============================================== */
// Pig Latin
// 1. check if word begins with a consonant,
// 2. take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// 3. If a word begins with a vowel, add way at the end.
function translatePigLatin(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const beginningRegex = /^[aeiou]/i;
	const allRegex = /[aeiou]/i;

	// if str begins with a vowel, add 'way' on the end
	if (beginningRegex.test(str)) {
		return str + 'way';
	}

	// if str does not have any vowels, add 'ay to the end
	if (!allRegex.test(str)) {
		return str + 'ay';
	}

	// if str begins with a consonant, compare string characters with array of vowels
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < vowels.length; j++) {
			// check if a character in str is a vowel
			if (vowels[j] === str[i]) {
				// get consonants from beginning
				let consonants = str.slice(0, str.indexOf(str[i]));

				// get rest of the string after consonants
				let theRest = str.slice(str.indexOf(str[i]));

				// add 'way' to the end of theRest
				return theRest + consonants + 'ay';
			}
		}
	}
}

// console.log(translatePigLatin('rhythm'));

/* ============================================== */
// Search and Replace
function myReplace(str, before, after) {
	const regex = new RegExp(before, 'g');

	// if before starts with cap,
	if (before[0] === before[0].toUpperCase()) {
		// make after start with a cap
		after = after[0].toUpperCase() + after.slice(1, after.length);
	}

	// if before starts with lowecase,
	if (before[0] === before[0].toLowerCase()) {
		after = after.toLowerCase();
	}

	const newstr = str.replace(regex, after);
	return newstr;
}

// console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));

/* ============================================== */
// DNA Pairing
// “A” and “T” are always paired together, and “G” and “C” are always paired together.
// ("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
function pairElement(str) {
	const splitStr = str.split('');
	console.log(splitStr);
	const arr = [];

	const mapped = splitStr.map(item => {
		switch (item) {
			case 'A':
				arr.push([item, 'T']);
				break;
			case 'C':
				arr.push([item, 'G']);
				break;
			case 'G':
				arr.push([item, 'C']);
				break;
			case 'T':
				arr.push([item, 'A']);
				break;
		}
	});

	return arr;
}

// console.log(pairElement('ATCGA')); // [['G', 'C'], ['C', 'G'], ['G', 'C']]

/* ============================================== */
// Misssing Letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	// console.log(alphabet.includes(str));
	const arr = [];
	const missingLetter = [];

	// check if no missing letter
	if (alphabet.includes(str) === true) {
		return undefined;
	}

	// if no missing letter, find it
	// 1. find the index in alphabet of the first and last letter in str
	const firstIndex = alphabet.indexOf(str[0]);
	//console.log(firstIndex);
	const lastIndex = alphabet.indexOf(str[str.length - 1]);
	//console.log(lastIndex);
	// 2. slice off alphabet with the indexes inclusively
	const sliceOfAlphabet = alphabet.slice(firstIndex, lastIndex + 1);
	//console.log(sliceOfAlphabet); // stuvwx
	// 3. compare the two strings with nested for loops
	// what letter in the slice is not in str?
	for (let i = 0; i <= sliceOfAlphabet.length; i++) {
		for (let j = 0; j < str.length; j++) {
			if (sliceOfAlphabet[j] !== str[j]) {
				missingLetter.push(sliceOfAlphabet[j]);
			}
		}
	}

	return missingLetter[0];
}

// console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')); // should return the string d
/**
 * fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 */

/* ============================================== */
// Sorted Union
/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 */

function uniteUnique(...args) {
	//console.log(args);
	return args.filter((item, index) => item.indexOf());
	// 1. return items from first array
	// 2. return unique items in second array that are not in the first array
	// 3.  return unique items in third array that are not in the first or second array
	if (args.length === 2) {
		console.log('test');
		const array1 = args[0];
		const array2 = args[1];
		console.log(array2.indexOf(3));
		// return the item in array1 that is not in array2
		const array3 = array1.filter(item => array2.indexOf(item) == -1); // 3
		// return the item in array2 that is not in array1
		const array4 = array2.filter(item => array1.indexOf(item) == -1); // 5

		return [...array1, ...array4];
	}

	if (args.length === 3) {
		console.log('test');
		const array1 = args[0];
		const array2 = args[1];
		const array3 = args[2];

		// return the item in array2 that is not in array1
		const array4 = array2.filter(item => array1.indexOf(item) == -1); // 5
		// return the item in array3 that is not in array1
		const array5 = array3.filter(item => array2.indexOf(item) == -1);

		return [...array1, ...array4, ...array5];
	}

	if (args.length === 4) {
		console.log('test');
		const array1 = args[0];
		const array2 = args[1];
		const array3 = args[2];
		const array4 = args[3];

		// return the item in array2 that is not in array1
		const array5 = array2.filter(item => array1.indexOf(item) == -1);
		// return the item in array3 that is not in array1
		const array6 = array3.filter(item => array2.indexOf(item) == -1);
		// return the item in array4 that is not in array3
		const array7 = array4.filter(item => array3.indexOf(item) == -1);

		return [...array1, ...array5, ...array6, ...array7];
	}
}

// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]

// FCC SOLUTION - modified a little
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sorted-union/16077
function uniteUnique(...args) {
	// console.log(args);
	//Use reduce function to flatten the array
	const newArr = args.reduce((arrA, arrB) => {
		//Apply filter to remove the duplicate elements in the array
		const filtered = arrB.filter(i => arrA.indexOf(i) === -1);
		return [...arrA, ...filtered];
	});

	return newArr;
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/* ============================================== */
// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// & = &amp;  < = &lt;   > = &gt;   " = &quot;   ' = &apos;
function convertHTML(str) {
	const splitStr = str.split('');
	const specialChars = [
		{ symbol: '&', htmlEnt: '&amp;' },
		{ symbol: '<', htmlEnt: '&lt;' },
		{ symbol: '>', htmlEnt: '&gt;' },
		{ symbol: '"', htmlEnt: '&quot;' },
		{ symbol: "'", htmlEnt: '&apos;' },
	];

	splitStr.map((char, i) => {
		return specialChars.map(item =>
			item.symbol === char ? (splitStr[i] = item.htmlEnt) : ''
		);
	});

	return splitStr.join('');
}

// console.log(convertHTML('<>'));

/* ================================================================ */
// Sum All Odd Fibonacci Numbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5

// https://dev.to/virenb/solving-sum-all-odd-fibonacci-numbers-freecodecamp-algorithm-challenges-nbc
// get us all the Fibonacci numbers less than our num
// function sumFibs(num) {
// 	let fibs = [1, 1]; // first pair
// 	let count = 0;
// 	let fibNums;
// 	let oddFibs = [];

// 	while (num > count) {
// 		// fibonacci stuff here
// 		fibNums = fibs[count] + fibs[count + 1];

// 		if (fibNums <= num) {
// 			// check for odd numbers
// 			if (fibNums % 2 === 1) {
// 				// push the odd numbers onto a new array
// 				oddFibs.push(fibNums);
// 			}
// 			// push all the fibonacci numbers onto the fibs array
// 			fibs.push(fibNums);
// 		}

// 		count++;
// 	}

// 	// add all the items in odd fibs array with an initial value of 2
// 	return oddFibs.reduce((a, b) => {
// 		return a + b;
// 	}, 2);
// }

// console.log(sumFibs(1000));

/* =========================================================== */
// Sum All Primes
/**
 *
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

/**
 * sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
 */
// get primes from stack overflow
// https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100

function sumPrimes(max) {
	// begin get primes
	const sieve = [];
	const primes = [];

	for (i = 2; i <= max; ++i) {
		if (!sieve[i]) {
			primes.push(i);
			for (j = i << 1; j <= max; j += i) {
				sieve[j] = true;
			}
		}
	}
	console.log(primes);
	// end get primes

	// sum of all the primes
	return primes.reduce((a, b) => a + b);
}

// console.log(sumPrimes(10));

/* =========================================== */
// Smallest Common Multiple. I CHEATED!!!
/**Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

// function smallestCommons(arr) {
// 	// 1. create array of numbers in a range
// 	const range = [];
// 	let factors;
// 	for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
// 		// console.log(i);
// 		range.push(i);
// 	}

// 	console.log(range[range.length - 1]);

// 	// 2. find LCM of all numbers in range array
// 	for (let i = 0; i < range[range.length - 1]; i++) {
// 		console.log(range[0] * (i + 1));
// 		console.log(range[1] * (i + 1));
// 		console.log(range[2] * (i + 1));

// 		if (range[i] > 1) {
// 			// for (let j = 1; j < range.length + 1; j++) {
// 			// 	//console.log(range[i] + ' ' + j);
// 			// 	//console.log(`${range[i]} times ${j} = ${range[i] * j}`);
// 			// 	let primeFactors = range[i] * j;
// 			// 	console.log(primeFactors);
// 			// }

// 			factors = range.map((item, index) => range[i] * (index + 1));
// 		}
// 		console.log(factors);
// 	}
// }
// console.log(smallestCommons([1, 4])); // smallestCommons([1, 3]) should return 6.
// smallestCommons([1, 5]) should return 60.

// Using Set to find duplicates
// https://attacomsian.com/blog/javascript-array-find-duplicates
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const set = new Set(numbers);

const duplicates = numbers.filter(item => {
	if (set.has(item)) {
		set.delete(item);
	} else {
		return item;
	}
});

// console.log(duplicates);
// [ 2, 5 ]

// I CHEATED!!!
// https://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers
// function smallestCommons(arr) {
// 	// create array of numbers in a range
// 	const sortedArr = arr.sort((a, b) => a - b);
// 	const min = sortedArr[0];
// 	const max = sortedArr[sortedArr.length - 1];
// 	function range(min, max) {
// 		const arr = [];
// 		for (var i = min; i <= max; i++) {
// 			arr.push(i);
// 		}
// 		return arr;
// 	}

// 	function gcd(a, b) {
// 		return !b ? a : gcd(b, a % b);
// 	}

// 	function lcm(a, b) {
// 		return (a * b) / gcd(a, b);
// 	}

// 	let multiple = min;
// 	range(min, max).map(n => (multiple = lcm(multiple, n)));

// 	return multiple;
// }

// console.log(smallestCommons([5, 1]));

/* ============================================================================ */
// Drop it
/**
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

// function dropElements(arr, func) {
// 	// if func returns true, stop looping, remove all elements before it, then return the remaining array, otherwise, arr should be returned as an empty array.
// 	for (let i = 0; i < arr.length; i++) {
// 		// console.log(i);
// 		// console.log(arr[i]);
// 		// console.log(func(arr[i]));

// 		if (func(arr[i])) {
// 			// console.log(arr.indexOf(arr[i]));
// 			// console.log(arr[i - 1]);
// 			// console.log(arr[arr.length - 1]);
// 			// console.log(arr[i]);
// 			return arr.slice(arr.indexOf(arr[i]), arr[arr.length]);
// 		}
// 		// func doesn't return true, return an empty array
// 		return arr.slice(arr.length);
// 	}
// }

// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
//console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

/* ======================================================================= */
// Steamroller
/**Flatten a nested array. You must account for varying levels of nesting.
 * Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 */
// function steamrollArray(arr) {
// 	return [].concat(...arr);
// }

// console.log(steamrollArray([[["a"]], [["b"]]]));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// const arr = [1, [2], [3, [[4]]]];

// console.log(arr.reduce((acc, val) => acc.concat(val), []));
// // [1, 2, 3, 4]

// // or with decomposition syntax
// const flattened = arr => [].concat(...arr);
// console.log(flattened(arr));

// const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d) {
	return d > 0 // if d > 0, run arr.reduce
		? arr.reduce(
				(acc, val) =>
					// concat acc with the return value of flatDeep recursively, otherwise return val
					acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
				[] // initial value is an empty array
		  )
		: arr.slice(); // return the current array bc it doesn't need flattening
}

// console.log(flatDeep([1, [2], [3, [[4]]]], Infinity));
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]

// FCC Solution (not mine but i understand it)
function steamrollArray2(arr) {
	const flattenedArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flattenedArray.push(...steamrollArray2(arr[i]));
		} else {
			flattenedArray.push(arr[i]);
		}
	}
	return flattenedArray;
}
// console.log(steamrollArray2([1, [2], [3, [[4]]]]));

/**
 * Binary Agents
 *
 * Return an English translated sentence of the passed binary string.
 */
// 0 is char code 48, 1 is char code 49
// parseInt('01000001', 2) => 65: convert binary to decimal
// String.charCodeAt(): returns decimal UTF-16 character code.
// String.fromCharCode(65)) => 'A': convert decimal to string character
function binaryAgent(str) {
	return str.split(' ')[0];
}

console.log(
	binaryAgent(
		'01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
	)
);
// should return the string Aren't bonfires fun!?
