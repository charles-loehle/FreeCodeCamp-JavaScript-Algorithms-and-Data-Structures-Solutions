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
// function whatIsInAName(collection, source) {
// 	var arr = [];
// 	const sourceKey = Object.keys(source);
// 	console.log(sourceKey);
// 	const sourceValue = Object.values(source)[0];
// 	console.log(sourceValue);
// 	console.log(Object.entries(source));
// 	console.log(Object.entries(collection)[0][1]);
// 	const sourcePropNames = Object.getOwnPropertyNames(source);
// 	console.log(sourcePropNames);
// 	console.log(Object.keys(collection[0]));
// 	// const collectionPropName
// 	console.log(Object.getOwnPropertyNames(collection[0])[1]);
// 	// return collection.find(el => el.last === Object.keys(source))

// 	// 1.get the source value
// 	console.log(sourceValue);

// 	// 2. get the collection key/value pairs
// 	console.log(collection);

// 	// 3. loop through collection and return entry that contains all source key/value pairs
// 	const lastVar = sourceKey;
// 	const filtered = collection.filter(item => item[lastVar] === sourceValue);
// 	const mapped = collection.map(item => item.hasOwnProperty(sourceKey));
// 	const filtered2 = collection.filter(item => item === source);
// 	return mapped;
// }

// console.log(
// 	whatIsInAName(
// 		[{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
// 		{ apple: 1, cookie: 2 }
// 	)
// );
// should return [{ "apple": 1, "bat": 2, "cookie": 2 }]

function whatIsInAName(collection, source) {
	// console.log(collection[0].hasOwnProperty(sourceKey));
	console.log(source);
	const sourceKey = Object.keys(source);
	console.log(sourceKey);
	// const collectionKeys = collection.map(item => Object.keys(item));
	// console.log(collectionKeys.flat());

	return collection
		.map(item => {
			if (
				item.hasOwnProperty(sourceKey[0]) &&
				item.hasOwnProperty(sourceKey[1])
			) {
				return item;
			} else {
				return null;
			}
		})
		.filter(item => item !== null);
}

console.log(
	whatIsInAName(
		[
			{ first: 'Romeo', last: 'Montague' },
			{ first: 'Mercutio', last: null },
			{ first: 'Tybalt', last: 'Capulet' },
		],
		{ last: 'Capulet' }
	)
);

// import moment from 'moment/min/moment.min.js';
// let corrina = new Date('August 28, 2021 10:00:00');
// let isha = new Date('August 28, 2021 10:30:00');
// let chisom = new Date('2021-08-28T16:00:00.000Z');
// let kate = new Date('August 28, 2021 11:00:00');
// let peter = new Date('August 28, 2021 11:30:00');
// let lliam = new Date('August 30, 2021 05:30:00');
// let kayla = new Date('August 30, 2021 06:00:00');
// console.log(typeof chisom);
// const dates = [corrina, peter, kate, isha, lliam, kayla, chisom];
// function sortDates(dates) {
// 	return dates.sort((a, b) => a - b);
// }

// console.log(sortDates(dates));
// console.log(typeof moment('2021-08-28T16:00:00.000Z').format('MMMM Do YYYY, h:mm:ss a'));

// // MongoDB dates are ISO 8601 format
// const anikaStr = '2021-08-26T21:30:00.000Z';
// const chisomStr = '2021-08-28T14:00:00.000Z';
// // console.log(typeof chisomStr)
// const melissaStr = '2021-08-28T17:00:00.438Z';
// const ishaStr = '2021-08-30T17:00:00.426Z';
// const lliamStr = '2021-08-30T17:30:00.426Z';
// const kaylaStr = '2021-08-30T16:00:00.426Z';
// const kateStr = '2021-08-28T15:00:00.000Z';
// console.log(new Date(kateStr));
// function sortStrDates(arr) {
// 	const sortByDate = arr.slice().sort((a, b) => {
// 		var c = new Date(a);
// 		var d = new Date(b);
// 		return c -d;
// 	});

// 	return sortByDate.map(item => {
// 		return item;
// 	});
// }

// console.log(
// 	sortStrDates([
// 		lliamStr,
// 		chisomStr,
// 		kaylaStr,
// 		melissaStr,
// 		anikaStr,
// 		ishaStr,
// 		kateStr,
// 	])
// );

// // https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property#10124053
// var array = [
// 	{ id: 1, date: 'Mar 12 2012 10:00:00 AM' },
// 	{ id: 2, date: 'Mar 12 2012 10:30:00 AM' },
// 	{ id: 3, date: 'Mar 8 2012 08:00:00 AM' },
// 	{ id: 4, date: 'Mar 8 2012 08:30:00 AM' },
// ];

// console.log(
// 	array.sort((a, b) => {
// 		var c = new Date(a.date);
// 		var d = new Date(b.date);
// 		return c - d;
// 	})
// );

// const lessons = [
// 	{
// 		assignment: '',
// 		attendance: '',
// 		createdAt: '2021-08-28T11:33:32.117Z',
// 		lessonSlot: '2021-08-28T17:30:00.426Z',
// 		student: {
// 			instrument: 'violin',
// 			_id: '612a1eefa734965ae0cfec96',
// 			name: 'Aliya',
// 			id: '612a1eefa734965ae0cfec96',
// 		},
// 		user: '5f5133734525c818345f50bd',
// 		__v: 0,
// 		_id: '612a1f0ca734965ae0cfec97',
// 	},
// 	{
// 		assignment: '',
// 		attendance: '',
// 		createdAt: '2021-08-28T11:31:11.335Z',
// 		lessonSlot: '2021-08-28T17:00:00.438Z',
// 		student: {
// 			instrument: 'violin',
// 			_id: '612a1e559466562dac12282b',
// 			name: 'Melissa',
// 			id: '612a1e559466562dac12282b',
// 		},
// 		user: '5f5133734525c818345f50bd',
// 		__v: 0,
// 	},
// 	{
// 		assignment: '',
// 		attendance: '',
// 		createdAt: '2021-08-27T15:30:47.621Z',
// 		lessonSlot: '2021-08-28T15:30:00.000Z',
// 		student: {
// 			instrument: 'guitar',
// 			_id: '5f0a1a6689e9ed1cc09b9144',
// 			name: 'Peter Borsci',
// 			id: '5f0a1a6689e9ed1cc09b9144',
// 		},
// 		user: '5f5133734525c818345f50bd',
// 		__v: 0,
// 	},
// 	{
// 		assignment: '',
// 		attendance: '',
// 		createdAt: '2021-08-27T15:30:35.960Z',
// 		lessonSlot: '2021-08-28T15:00:00.000Z',
// 		student: {
// 			instrument: 'violin',
// 			_id: '5f0a1a3989e9ed1cc09b9143',
// 			name: 'Kate Borsci',
// 			id: '5f0a1a3989e9ed1cc09b9143',
// 		},
// 		user: '5f5133734525c818345f50bd',
// 		__v: 0,
// 	},
// 	{
// 		assignment: '',
// 		attendance: '',
// 		createdAt: '2021-08-27T15:32:40.935Z',
// 		lessonSlot: '2021-08-28T14:00:00.000Z',
// 		student: {
// 			instrument: 'violin',
// 			_id: '6129058531c19643ecffaa33',
// 			name: 'Chisom',
// 			id: '6129058531c19643ecffaa33',
// 		},
// 		user: '5f5133734525c818345f50bd',
// 		__v: 0,
// 	},
// 	{
// 		assignment: 'Last lesson',
// 		attendance: 'present',
// 		createdAt: '2021-08-27T15:29:13.668Z',
// 		lessonSlot: '2021-08-26T21:30:00.000Z',
// 		student: {
// 			instrument: 'violin',
// 			_id: '5f07ac5b5182fa201c0c37b5',
// 			name: 'Anika Renner',
// 			id: '5f07ac5b5182fa201c0c37b5',
// 		},
// 		user: '5f5133734525c818345f50bd',
// 		__v: 0,
// 		_id: '612904c931c19643ecffaa30',
// 	},
// ];

// function sortArrayByLessonSlot(arr) {
// 	const lessonTimes = arr
// 		.map(lesson => lesson)
// 		.sort((a, b) => {
// 			var c = new Date(a.lessonSlot).getTime();
// 			var d = new Date(b.lessonSlot).getTime();
// 			return c - d;
// 		})

// 	return lessonTimes.map(lesson => new Date(lesson.lessonSlot));

// 	// return sorted.map(lesson => lesson.lessonSlot);
// }
// console.log(sortArrayByLessonSlot(lessons));

// const now = new Date().getTime();
// const corrine = new Date('2021-08-28T14:00:00.000Z').getTime();
// console.log(now);
// console.log(corrine);
// console.log(new Date(anikaStr).getTime());
// console.log(now - corrine);

// const timeArr = [now, new Date(anikaStr).getTime(), corrine];
// function sortTimes(arr) {
// 	return arr.sort();
// }
// console.log(sortTimes(timeArr));
