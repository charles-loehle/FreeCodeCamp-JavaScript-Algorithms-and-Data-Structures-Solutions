// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
/* ========================================= */
function lookUpProfile(name, prop) {
// Only change code below this line

  // check if name is an actual contact's firstName
  const findByName = contacts.filter(contact => contact.firstName === name)
  // console.log(findByName);

  // and the given property (prop) is a property of that contact
  // console.log(findByName[0][prop]);
  // console.log(findByName && findByName[0][prop] ? findByName[0][prop] : false);

  // console.log(findByName.length === 0);
  // If name does not correspond to any contacts then return the string No such contact
  if (findByName.length === 0) {
    return 'No such contact'
  }

  // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property
  // console.log(!contacts[0].hasOwnProperty(prop));
  if (!contacts[0].hasOwnProperty(prop)) {
    return 'No such property'
  }

  // If both are true, then return the "value" of that property
  if (findByName && findByName[0][prop]) {
    return findByName[0][prop]
  }
  
// Only change code above this line
}

// console.log(lookUpProfile("Akira", "likes"));
// lookUpProfile("Kristian", "lastName") should return the string Vos
/* ========================================= */
/* ========================================= */
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }

  result = lookup[val]
  // Only change code above this line
  return result;
}

// console.log(phoneticLookup("charlie"));
/* ========================================= */
/* ========================================= */
function checkObj(obj, checkProp) {
  // If the property is found, return that property's value
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp]
  // If not, return "Not Found"
  } else {
    return "Not Found"
  }
}

// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"));

/* ========================================= */
/* Record Collection ========================================= */
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // If prop isn't 'tracks' and value isn't an empty string, update or set that album's prop to value because 'artist' is missing
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  }

  // If prop is 'tracks' but the album doesn't have a 'tracks' property, create an empty array and add value to it
  if (prop === 'tracks' && (!records[id].hasOwnProperty(prop))) {
    // create an empty array and add value to tracks property
    records[id].tracks = [value]
  } 

  // If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array
  // also check if entry has tracks?
 if (prop === 'tracks' && (records[id].hasOwnProperty('tracks') !== false) && value !== '') {
    // add value to the end of the album's existing tracks array
    records[id].tracks.push(value)
  }

  // If value is an empty string, delete the given prop property from the album
  if (value === '') {
    delete records[id][prop]
  }

  // Your function must always return the entire record collection object
  return records
}
// console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
/* ========================================= */
/* ========================================= */
// Use a for loop to push the values 1 through 5 onto myArray

// var myArray = []
// for(let i = 1; i < 6; i++){
//   myArray.push(i)
// }
// console.log(myArray);

/* ========================================= */
/* ========================================= */
// Push the odd numbers from 1 through 9 to myArray using a for loop.
// var myArray = []

// for(let i = 1; i <= 9; i += 2) {
//   myArray.push(i)
// }
// console.log(myArray);

/* ========================================= */
/* ========================================= */
// Push the odd numbers from 9 through 1 to myArray using a for loop.
// var myArray = [];
// for(let i = 9; i > 0; i -= 2){
//   myArray.push(i)
// }

// console.log(myArray);

/* ========================================= */
/* ========================================= */
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
// var total = 0
// var myArr = [2, 3, 4, 5, 6];
// for(let i = 0; i < myArr.length; i++){
//   total += myArr[i]
// }
// console.log(total);

/* ======================================================== */
/* Nesting For Loops ======================================================== */

// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
//    for(let i = 0; i < arr.length; i++){
//      for(let j = 0; j < arr[i].length; j++){
//        product *= arr[i][j]
//      }
//    }
//   // Only change code above this line
//   return product;
// }

// console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]));

/* ================================================================ */
/* Generate Random Whole Numbers within a Range ==================================== */
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  // Only change code above this line
}
// console.log(randomRange(1, 17))

/* ================================================================ */
/* Use Multiple Conditional (Ternary) Operators ==================================== */
// check if a number is positive, negative or zero. The function should return positive, negative or zero
function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero"
}

// console.log(checkSign(-220));

/* ================================================================ */
/* Use Recursion to Create a Countdown ==================================== */
// Example counting up
// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
//  console.log(countup(5));

// Counting down
function countdown(n){
  if (n <= 0) {
    return [];
  } else {
    // console.log(n);
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line
// console.log(countdown(5))

// Colt Steele recursion video
function coltSteeleCountDown(num){
  if (num <=0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--
  coltSteeleCountDown(num)
}
// coltSteeleCountDown(5)

/* ================================================================ */
/* Use Recursion to Create a Range of Numbers ==================================== */
// The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

// Cheated using Florin Pop's video "Conquering freeCodeCamp - Basic JavaScript (Part 2)"
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum + 1) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    return countArray;
  }
};
console.log(rangeOfNumbers(1, 5));
