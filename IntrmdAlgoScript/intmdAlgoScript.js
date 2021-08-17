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

function diffArray (arr1, arr2) {
   const spreaded = [...arr1, ...arr2];
   return spreaded.filter(el => {
      return !(arr1.includes(el) && arr2.includes(el));
   })
};
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/* ======================================================= */
/* Seek and Destroy */
function destroyer(arr) {
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));