/* ================================== */
/* Match Letters of the Alphabet */
let quoteSample = "1234The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let digitRegex = /[0-9]/gi;
let result = quoteSample.match(alphabetRegex); 

console.log(alphabetRegex.test(quoteSample)); // check for letters
console.log(digitRegex.test(quoteSample)); // check for numbers

// check for mixed letters and numbers 
if(alphabetRegex.test(quoteSample) && digitRegex.test(quoteSample)){
  console.log('mixed')
} else if(alphabetRegex.test(quoteSample)) { // check for letters only
  console.log('letters');
} else {
  console.log('numbers');
}
console.log(result)


/* ================================== */
/* Match Numbers and Letters of the Alphabet */
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result2 = quoteSample2.match(myRegex); // Change this line

console.log(result2)


/* ================================== */
/* Match All Letters and Numbers */
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_)
let quoteSample3 = "The five5666666666666boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result3 = quoteSample3.match(alphabetRegexV2).length;

console.log(result3)
console.log(alphabetRegexV2.test(quoteSample3))

/* ================================== */
/* Match All Numbers */
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result4 = movieName.match(numRegex).length;

console.log(numRegex.test(movieName)) // check for numbers 
console.log(result4) // count number characters