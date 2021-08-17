function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		// Only change code below this line

		let obj = [...arr];
		newArr.push(obj);

		// Only change code above this line
		num--;
	}
	return newArr;
}

// console.log(copyMachine([true, false, true], 2));

/* ========================================= */
/* Iterate Through All an Array's Items Using For Loops */
function filteredArray(arr, elem) {
	let newArr = [];
	// Only change code below this line
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].includes(elem));
		if (arr[i].includes(elem) !== true) {
			newArr.push(arr[i]);
		}
	}
	// Only change code above this line
	return newArr;
}

// console.log(
// 	filteredArray(
// 		[
// 			[10, 8, 3],
// 			[14, 6, 23],
// 			[3, 18, 6],
// 		],
// 		18
// 	)
// );

/* ======================================== */
/* Iterate Through the Keys of an Object with a for...in StatementPassed */
function countOnline(usersObj) {
	// Only change code below this line
	let count = 0;
	for (let user in usersObj) {
		// console.log(usersObj[user].online);
		if (usersObj[user].online) {
			count += 1;
		}
	}
	return count;
	// Only change code above this line
}

// console.log(
// 	countOnline({
// 		Alan: { online: false },
// 		Jeff: { online: true },
// 		Sarah: { online: false },
// 	})
// );

/* ============================================= */
/* Generate an Array of All Object Keys with Object.keys() */
let users = {
	Alan: {
		age: 27,
		online: false,
	},
	Jeff: {
		age: 32,
		online: true,
	},
	Sarah: {
		age: 48,
		online: false,
	},
	Ryan: {
		age: 19,
		online: true,
	},
};

function getArrayOfUsers(obj) {
	// Only change code below this line
	return Object.keys(obj);
	// Only change code above this line
}

// console.log(getArrayOfUsers(users));

/* ====================================== */
/* Modify an Array Stored in an Object */
let user = {
	name: 'Kenneth',
	age: 28,
	data: {
		username: 'kennethCodesAllDay',
		joinDate: 'March 26, 2016',
		organization: 'freeCodeCamp',
		friends: ['Sam', 'Kira', 'Tomo'],
		location: {
			city: 'San Francisco',
			state: 'CA',
			country: 'USA',
		},
	},
};

function addFriend(userObj, friend) {
	// Only change code below this line
	userObj.data.friends.push(friend);
	return userObj.data.friends;
	// Only change code above this line
}

// console.log(addFriend(user, 'Pete'));
