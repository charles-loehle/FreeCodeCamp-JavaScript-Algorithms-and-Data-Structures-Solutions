/**
 * Coding Interview Prep -> Algorithms -> Find the Symmetric Difference
 */

// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
function sym(arr1, arr2) {
	const newarr = []
	for(i = 0; i < arr1.length; i++){
		for(j = 0; j < arr2.length; j++){
			console.log(arr1[i] === arr2[j]);
			if (arr1[i] === arr2[j]) {
				newarr.push(arr1[i])
			}
		}
	}
	return newarr;// Symmetric sameness [1, 2]
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));

/* Intermediate Algorithm Scripting: Diff Two Arrays */
function difference(arr1, arr2) {
  let arr = arr1.concat(arr2);
  // arr = [1,2,3,5,1,2,3,4,5]
  return arr.filter((val) => arr.indexOf(val) === arr.lastIndexOf(val));
  // indexOf(4) = 7 and lastIndexOf(4) = 7, 7 = 7 so return 4
}
console.log(difference([1, 2, 3, 5], [1, 2, 3, 4, 5]));


