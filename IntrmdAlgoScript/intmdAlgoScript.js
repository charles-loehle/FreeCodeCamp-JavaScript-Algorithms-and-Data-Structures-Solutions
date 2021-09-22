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
// function destroyer(arr) {
// 	let arr1 = [...arguments[0]];
// 	//console.log(arr1);
// 	let arr2 = [...arguments].slice(1);
// 	//console.log(arr2);
// 	let argsArr = [...arr1, ...arr2];
// 	// console.log(argsArr);
// 	return argsArr.filter(el => {
// 		return !(arr1.includes(el) && arr2.includes(el));
// 	});
// }
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // remove the 2s and 3s and 5s from arr

/* ============================================== */
/* Wherefore art thou */
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).

// https://stackoverflow.com/questions/6237537/finding-matching-objects-in-an-array-of-objects
// function whatIsInAName(collection, source) {
// 	return collection.filter(function (entry) {
// 		return Object.keys(source).every(function (key) {
// 			return entry[key] === source[key];
// 		});
// 	});
// }
// var collection = [
// 	{ color: 'blue' },
// 	{ color: 'green' },
// 	{ color: 'red' },
// 	{ color: 'green' },
// ];

// var collection2 = [
// 	{ apple: 1, bat: 2 },
// 	{ apple: 1 },
// 	{ apple: 1, bat: 2, cookie: 2 },
// ];

// console.log(whatIsInAName(collection, { color: 'green' }));

// console.log(whatIsInAName(collection2, { apple: 1, cookie: 2 }));

/* ============================================== */
// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	// regex that matches spaces or uppercase or underscore or dash. Uppercase part contains a positive lookahead to keep the capital letters
	const regex = /\s|(?=[A-Z])|_|-/
	
	const splitStr = str.split(regex)

	return splitStr.join('-').toLowerCase()
}

console.log(spinalCase('AllThe-small Things')); // should return the string this-is-spinal-tap.

