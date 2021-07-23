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

// // https://www.youtube.com/watch?v=lMBVwYrmFZQ&ab_channel=ColtSteele at 10:43 THE CALL STACK
// function sumRange(num) {
// 	if (num === 1) {
// 		return 1;
// 	}
// 	return num + sumRange(num - 1);
// }
// console.log(sumRange(3));
