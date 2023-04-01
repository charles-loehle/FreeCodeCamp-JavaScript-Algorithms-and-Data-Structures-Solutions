// const body = document.querySelector('body');
// const h1 = document.createElement('h1');
// body.appendChild(h1);

// function multiply2(arr, n) {
// 	if (n <= 0) {
// 		return 1;
// 	} else {
// 		return multiply2(arr, n - 1) * arr[n - 1];
// 	}
// }

// console.log(multiply2([1, 2, 3, 4, 5], 4));

/* Replace Loops using Recursion ================================================================= */
// function sum(arr, n) {
// 	if (n <= 0) {
// 		return 0;
// 	} else {
// 		return sum(arr, n - 1) + arr[n - 1];
// 	}
// }

// console.log(sum([1, 2, 3, 4], 4));

// function factorial(num) {
// 	if (num === 1) {
// 		h1.innerHTML = num;
// 		return num;
// 	}
// 	h1.innerHTML = num;
// 	return num * factorial(num - 1);
// }

// console.log(factorial(3));

/**
 * Use Recursion to Create a Countdown
 */
// Count up
// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

function countdown(n) {
	if (n < 1) {
		// base case
		return [];
	} else {
		// recursive case
		let countArray = countdown(n - 1);
		countArray.unshift(n); // reverse order of numbers [5,4,3,2,1]
		return countArray;
	}
}
// console.log(countdown(5));

/**
 * Use Recursion to Create a Range of Numbers
 */
// Return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number.

// // https://www.youtube.com/watch?v=lMBVwYrmFZQ&ab_channel=ColtSteele at 10:43 THE CALL STACK
// function sumRange(num) {
// 	if (num === 1) {
// 		return 1;
// 	}
// 	return num + sumRange(num - 1);
// }
// console.log(sumRange(3));
