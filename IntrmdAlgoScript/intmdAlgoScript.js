/* ================================================== */
/* Sum All Numbers in a Range */
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first
function sumAll(arr) {
	// let n = 0;
	let sortedArr = arr.sort((a, b) => a - b);
	// console.log(sortedArr);
	let sum = 0;
	let newArr = [];
	for (let i = arr[0]; i <= sortedArr[1]; i++) {
		const element = i;
		// console.log(element);
		newArr.push(element);
	}

	// using reduce or for loop
	// return newArr.reduce((acc, curr) => acc + curr);
	for (let i = 0; i < newArr.length; i++) {
		sum += newArr[i];
	}

	return sum;
}

// console.log(sumAll([4, 1]));

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
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

function sumPrimes(num) {
	return num;
}

console.log(sumPrimes(10));
/**
 * sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
 */
